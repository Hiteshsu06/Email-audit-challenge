import React from 'react';
import { Avatar } from 'primereact/avatar';
import './RecipientsDisplay.css';

type AuditTableProps = React.PropsWithChildren<{
  emails: any
}>

export default function RecipientsDisplay({ emails }: AuditTableProps) {
    if(emails?.length === 1){
        return(<span className='single-receipent'>{emails}</span>)
    }
    else if(emails?.length > 2){
      let multipleEmail = [];
      let numberOfEmail = 0 ;   // number of comma will be one less then total number
      for (let index = 0; index < emails?.length; index++) {
        if(index === emails.length - 1){
          multipleEmail.push(emails[index]);
        }
        else{
          multipleEmail.push(emails[index] + ",");
          numberOfEmail = numberOfEmail + 1
        }
      }
    
      return(
      <div className='multiple-receipent'>
         <div className='multiple-emails' id='email-id'>{multipleEmail}</div>
         <div className='avatar'>
          <Avatar label={"+" +String(numberOfEmail - 1)} shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
         </div>
      </div>
      )
    }
    else{
      return(<>
        {emails}
        </>)
    }
}
