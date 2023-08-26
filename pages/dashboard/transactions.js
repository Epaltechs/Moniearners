import React, { useState } from 'react'
import { SideBar } from '../../components/dashboard/Sidebar/SideBar'
import TopNav from '../../components/dashboard/TopNav/TopNav'
import styles from '../../styles/dashboard/AffiliateMarketPlace.module.css'

import useWindowDimensions from '../../utils/hooks/useWindowDimension'
import Image from 'next/image'
import filter from '../../public/icons/Group.svg'

import { Button } from '@mui/material'
import ActionButton from '../../components/dashboard/ReusableButtons/ActionButton'
import TransactionTable from '../../components/dashboard/Table/TransactionsTable'
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import {useRouter} from 'next/router';

import { selectUser } from '../../redux/features/userSlice'
import TransactionService from '../../services/Transaaction.services'

const Transaction = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showFilterPeriod, setShowFilterPeriod] = useState(false)
  const [transaction, setTransaction] = useState([])
  const { push } = useRouter();

  useEffect(() => {
    async function getData(){
      const response = await TransactionService.getUserTransactions()

      if(response.status === 200){

        const transaction = response.data.transactions.transactions
        const userData = {
          fullName: response.data.transactions.firstName + " " + response.data.transactions.lastName,
          email : response.data.transactions.email,
        }

        transaction.map((item) => {
            item.fullName = userData.fullName;
            item.email = userData.email;
          return item;
        })

        setTransaction(transaction)
      }
    }

    getData()
  },[])

  return (
    <>
      <div className={styles.pgTitles}>
                <h3 >Transactions</h3>
              </div>


              <div className={`tableContainer`}>
                <div className={styles.mainTableArea}>

                  <div className={`TableTopButtonContainer`}>
                    <div className={`tableTop`} >
                      <span>Recent Sales</span>
                      <div >
                        <Button
                              style={{
                                  fontFamily: 'Inter',
                                  fontStyle: 'normal',
                                  fontWeight: 500,
                                  fontSize: '12px',
                                  lineHeight: '16px',
                                  color: '#6B7280',
                                  borderRadius: '12px',
                                  border: '1px solid #D1D5DB',
                                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                  borderRadius: '4px',
                                  padding: '7px 11px 7px 9px',
                                  gap: '8px'
                              }}>
                                  <Image src={filter} width="16px" height="16px" />
                          Filter
                        </Button>
                      </div>
                    </div>
                    <TransactionTable data={transaction} />
                  </div>
                </div>
              </div>
    </>
  )
}

export default Transaction