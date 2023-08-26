import React, { useState, useRef, useEffect  } from "react";
import UserService from "../../services/user.services";
import ProductService from "../../services/product.services";
import { toast } from "react-toastify";


import { SideBar } from "../../components/dashboard/Sidebar/SideBar";
import TopNav from "../../components/dashboard/TopNav/TopNav";
import styles from "../../styles/dashboard/NewProduct.module.css";

import useWindowDimensions from "../../utils/hooks/useWindowDimension";
import Image from "next/image";

import { Button } from "@mui/material";
import ActionButton from "../../components/dashboard/ReusableButtons/ActionButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UploadButton from "../../components/dashboard/ReusableButtons/UpleadButton";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";




const NewProduct = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFilterPeriod, setShowFilterPeriod] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [others, setOther] = useState("");
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [commission, setCommission] = useState("");
  const [pageBody, setPageBody] = useState("");

  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState([]);

  const editorRef = useRef(null);
  const log = async(e) => {
    e.preventDefault();
    let editorContent = ""
    if (editorRef.current) {
      editorContent = editorRef.current.getContent()
      console.log(editorRef.current.getContent());
    }

    let payload = {
      pageBody: editorContent,
      cost,
      title: productName,
      authorId: selectedAuthor._id,
      type: selectedCategory,
      commission,
    }

    if(selectedCategory === "others"){
      payload.type = others
    }
    console.log(payload)
    const response = await ProductService.createNewProduct(payload)

    if (response){
      toast.success(`${productName} product created successfully!!!`)
    }
  };


    useEffect(()=> {
      async function getVendors(){
        const response = await UserService.getAllVendors()
        console.log(response)
        if (response){
          setAuthors(response.result)
        }
      }

      getVendors()
    },[])    


   return (
    <>
      <div className={styles.TopDiv}>
      <div className={styles.pgTitles}>
        <h2>Affiliate Market Place/</h2>
        <p>Create a New Product</p>
      </div>


      <div className={styles.mybtn} style={{marginTop: 30}}>
              <ActionButton  text="Save" action={log} width="100px" height="50px" />
              {/* <button onClick={log}>Log editor content</button> */}
      </div>

      </div>
    

      <div className={styles.mainSectionContainer}>
        <div className={styles.personalSection}>
          <form>
            <div className={styles.formContainer}>
          <div className={styles.inputArea}>
              <label htmlFor="name">Product Name</label>
              <br />
              <input type="text" name="name" value={productName} onChange={(e)=> setProductName(e.target.value)} placeholder="Ronald Richie"  />
            </div>

            <div className={styles.inputArea}>

            <label htmlFor="categoryr">Category</label>
            <select id="selected" onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">Select Product Category</option>
              <option value="ebook">Ebook</option>
              <option value="videos">Videos</option>
              <option value="others">Other</option>
            </select>

            {
              selectedCategory === 'others' ? <input type="text" id="txt-other" placeholder="specify" name="other-value" onChange={(e) => setOther(e.target.value)} /> : null
            }

          </div>
          </div>

          <div className={styles.formContainer}>


            <div className={styles.inputArea}>
              <label for="html">Price</label>
              <br />
              <input type="number" name="price" placeholder="N24,000" value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>

            <div className={styles.inputArea}>
              <label for="html">Commission</label>
              <br />
              <input type="number" name="commission" placeholder="Commission in percentage" value={commission} onChange={(e) => setCommission(e.target.value)} />
            </div>
            </div>

            {/* <div className={styles.inputArea}>
            <label for="html">Author</label>

            <select id="selected" onChange={(e) => setSelectedAuthor(e.target.value)} className={styles.inputAreaSelect}>
              <option value="">Select Product Category</option>
              {
                authors.map((author) => {
                  return <option key={author._id} value={author._id} onChange={(e) => setSelectedAuthor(e.target.value)}>{author.firstName} {author.lastName}</option>
                })
              }
            </select>
            </div> */}

            {/* <button onClick={useEffect}>Create</button> */}

            <div className={styles.inputArea}>
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menu: {
                    file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
                    edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
                    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
                    insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
                    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
                    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
                    table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
                    help: { title: 'Help', items: 'help' }
                  },
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "paste",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | " +
                    "bold italic forecolor underline strikethrough | link image media table mergetags | addcomment showcomments | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat |" +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
