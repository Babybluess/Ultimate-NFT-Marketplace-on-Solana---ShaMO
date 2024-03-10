import React from 'react'

const createnft = async( address, name, description, file) => {

  // const toTransaction = (encode_Transaction) => Uint8Array.from(atob(encode_Transaction), c => c.charCodeAt(0))

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "srOocXkyRWP5dgSJ");
    
    var formdata = new FormData();
    formdata.append("network", "devnet");
    formdata.append("wallet", address);
    formdata.append("name", name);
    formdata.append("symbol", "Babyblue");
    formdata.append("description", description);
    formdata.append("attributes", '[{"trait_type":"dev power","value":"over 900"}]');
    formdata.append("external_url", "https://shyft.to");
    formdata.append("max_supply", "0");
    formdata.append("royalty", "5");
    formdata.append("file", file);
    formdata.append("nft_receiver", address);
    formdata.append('service_charge', `{ "receiver": ${address},  "token": "DjMA5cCK95X333t7SgkpsG5vC9wMk7u9JV4w8qipvFE8",  "amount": 0.01}`);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://api.shyft.to/sol/v1/nft/create_detach", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

export default createnft