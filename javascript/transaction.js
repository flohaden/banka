function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width="0";
  }

  const accountCard = (accNu, bal) => 
  `<div class="mastercard">
    <h5>${accNu}</h5>
    <p>${bal}</p>
    </div>
  `
  
  const accounts = [
    {
      accNu: '012387536',
      bal: 2000
    },
    // {
    //    accNu: '000026733',
    //    bal: 60000
    // }
  ]
  
  
  window.addEventListener('DOMContentLoaded', () => {
    const accountSction = document.querySelector('.mastercard-1');
  
    let allAccounts = '';
  
    accounts.forEach(account => {
      allAccounts = allAccounts + accountCard(account.accNu, account.bal)
    })
  
    console.log(allAccounts)
  
    accountSction.innerHTML = allAccounts
  })
  
  
  const accountss = [
    {
      accNu: '012387536',
      bal: 2000
    },
  ]
    window.addEventListener('DOMContentLoaded', () => {
      const accountSctions = document.querySelector('.mastercard-2');
    
      let allAccountss = '';
    
      accountss.forEach(accountt => {
        allAccountss = allAccountss + accountCard(accountt.accNu, accountt.bal)
      })
    
      console.log(allAccountss)
    
      accountSctions.innerHTML = allAccountss
    })

  
  
    const tablebody = (td1, td2, td3, td4, td5) => 
    `<tr>                 
        <td class="no">${td1}</td>
        <td>${td2}</td>
        <td class="alert">${td3}</td>
        <td>${td4}</td>
        <td>${td5}</td>
    </tr>
    `  
    

  const tables = [
    {
      td1: 1,
      td2: '1234',
      td3: 'credit',
      td4: 20000,
      td5: '02-05-21'
    },
    {
      td1: 2,
      td2: '1235',
      td3: 'credit',
      td4: 11000,
      td5: '12-05-21'
    },
    {
      td1: 3,
      td2: '1236',
      td3: 'debit',
      td4: 14000,
      td5: '22-05-21'
    },
    {
      td1: 4,
      td2: '1237',
      td3: 'debit',
      td4: 13000,
      td5: '06-06-21'
    },
    {
      td1: 5,
      td2: '1238',
      td3: 'credit',
      td4: 1000,
      td5: '01-06-21'
    },
    {
      td1: 6,
      td2: '1224',
      td3: 'debit',
      td4: 44000,
      td5: '22-05-21'
    },
    {
      td1: 7,
      td2: '1375',
      td3: 'credit',
      td4: 14000,
      td5: '12-05-21'
    },
    {
      td1: 8,
      td2: '1562',
      td3: 'debit',
      td4: 14500,
      td5: '01-05-21'
    },
    {
      td1: 9,
      td2: '1527',
      td3: 'credit',
      td4: 13000,
      td5: '22-04-21'
    },
    {
      td1: 10,
      td2: '1133',
      td3: 'credit',
      td4: 10200,
      td5: '17-04-21'
    },
    {
      td1: 11,
      td2: '1214',
      td3: 'credit',
      td4: 10500,
      td5: '13-04-21'
    },
    {
      td1: 12,
      td2: '1135',
      td3: 'debit',
      td4: 13679,
      td5: '12-04-21'
    },
    {
      td1: 13,
      td2: '1036',
      td3: 'debit',
      td4: 14100,
      td5: '10-04-21'
    },
    {
      td1: 14,
      td2: '1380',
      td3: 'debit',
      td4: 2100,
      td5: '07-04-21'
    },
  ]
  
  window.addEventListener('DOMContentLoaded', () => {
    const tableSction = document.querySelector('tbody');
  
    let allTables = '';
  
    tables.forEach(tableb => {
      allTables = allTables + tablebody(tableb.td1, tableb.td2, tableb.td3, tableb.td4, tableb.td5)
    })
  
    console.log(allTables)
  
    tableSction.innerHTML = allTables
  })
  




  const tabless = [
    {
      td1: 1,
      td2: '1211',
      td3: 'debit',
      td4: 10000,
      td5: '02-06-21'
    },
    {
      td1: 2,
      td2: '1225',
      td3: 'credit',
      td4: 11000,
      td5: '16-05-21'
    },
    {
      td1: 3,
      td2: '1223',
      td3: 'debit',
      td4: 14000,
      td5: '02-05-21'
    },
    {
      td1: 4,
      td2: '1347',
      td3: 'debit',
      td4: 2100,
      td5: '26-04-21'
    },
    {
      td1: 5,
      td2: '1348',
      td3: 'debit',
      td4: 500,
      td5: '12-04-21'
    },
    {
      td1: 6,
      td2: '1224',
      td3: 'debit',
      td4: 44000,
      td5: '22-05-21'
    },
    {
      td1: 7,
      td2: '1375',
      td3: 'credit',
      td4: 14000,
      td5: '12-05-21'
    },
    {
      td1: 8,
      td2: '1562',
      td3: 'debit',
      td4: 14500,
      td5: '01-05-21'
    },
    {
      td1: 9,
      td2: '1527',
      td3: 'credit',
      td4: 13000,
      td5: '22-04-21'
    },
    {
      td1: 10,
      td2: '1133',
      td3: 'credit',
      td4: 10200,
      td5: '17-04-21'
    },
    {
      td1: 11,
      td2: '1214',
      td3: 'credit',
      td4: 10500,
      td5: '13-04-21'
    },
    {
      td1: 12,
      td2: '1135',
      td3: 'debit',
      td4: 13679,
      td5: '12-04-21'
    },
    {
      td1: 13,
      td2: '1036',
      td3: 'debit',
      td4: 14100,
      td5: '10-04-21'
    },
    {
      td1: 14,
      td2: '1380',
      td3: 'debit',
      td4: 2100,
      td5: '07-04-21'
    },
  ]
  
  document.querySelector(".mastercard-1").addEventListener("click", function(event) {
    var tableSection= document.querySelector('tbody');
  
    let allTables = "";
  
    
    tabless.forEach(tableb => {
      allTables = allTables + tablebody(tableb.td1, tableb.td2, tableb.td3, tableb.td4, tableb.td5)
    })
  
    console.log(allTables)
  
    tableSection.innerHTML = allTables
  })
  
  const tablesss = [
    {
      td1: 1,
      td2: '1234',
      td3: 'credit',
      td4: 20000,
      td5: '22-05-21'
    },
    {
      td1: 2,
      td2: '1235',
      td3: 'credit',
      td4: 11000,
      td5: '12-05-21'
    },
    {
      td1: 3,
      td2: '1273',
      td3: 'debit',
      td4: 900,
      td5: '01-05-21'
    },
    {
      td1: 4,
      td2: '1047',
      td3: 'debit',
      td4: 1800,
      td5: '22-04-21'
    },
    {
      td1: 5,
      td2: '1778',
      td3: 'debit',
      td4: 2000,
      td5: '12-04-21'
    },
    {
      td1: 6,
      td2: '1224',
      td3: 'debit',
      td4: 44000,
      td5: '22-05-21'
    },
    {
      td1: 7,
      td2: '1375',
      td3: 'credit',
      td4: 14000,
      td5: '12-05-21'
    },
    {
      td1: 8,
      td2: '1562',
      td3: 'debit',
      td4: 14500,
      td5: '01-05-21'
    },
    {
      td1: 9,
      td2: '1527',
      td3: 'credit',
      td4: 13000,
      td5: '22-04-21'
    },
    {
      td1: 10,
      td2: '1133',
      td3: 'credit',
      td4: 10200,
      td5: '17-04-21'
    },
    {
      td1: 11,
      td2: '1214',
      td3: 'credit',
      td4: 10500,
      td5: '13-04-21'
    },
    {
      td1: 12,
      td2: '1135',
      td3: 'debit',
      td4: 13679,
      td5: '12-04-21'
    },
    {
      td1: 13,
      td2: '1036',
      td3: 'debit',
      td4: 14100,
      td5: '10-04-21'
    },
    {
      td1: 14,
      td2: '1380',
      td3: 'debit',
      td4: 2100,
      td5: '07-04-21'
    },
  ]
  
  document.querySelector(".mastercard-2").addEventListener("click", function(event) {
    var tableSection= document.querySelector('tbody');
  
    let allTabless = "";
  
    
    tablesss.forEach(tableb => {
      allTabless = allTabless + tablebody(tableb.td1, tableb.td2, tableb.td3, tableb.td4, tableb.td5)
    })
  
    console.log(allTabless)
  
    tableSection.innerHTML = allTabless
  })