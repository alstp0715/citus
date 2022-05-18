    $.ajax({
            url: 'csv_data.csv',
            dataType: 'text',
        }).done(csv_file);
    
    function csv_file(data){
        const csvData = JSON.parse(JSON.stringify(data)).split('\r\n');
        let xa = "";
        let xb = "";
        let xc = "";
        let xd = ""; 
        let xe = "";
        for(let i = 0; i < csvData.length-1; i++){
            const onData = csvData[i].split(',');
            xa += `<li>${onData[0]}</li>`;
            xb += `<li>${onData[1]}</li>`;
            xc += `<li>${onData[2]}</li>`;
            xd += `<li>${onData[3]}</li>`;
            xe += `<li>${onData[4]}</li>`;
            console.log(onData);
        }
        $('#sun_day').append(xa)
        $('#sun_mon').append(xc)
        $('#ess_day').append(xb)
        $('#ess_mon').append(xd)
        $('#ess_total').append(xe)
        
    }
    