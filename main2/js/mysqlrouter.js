const express = require('express');
const userDBC = require('./mysql');
const router = express.Router();

router.get('/getUsers', async (req, res)=>
{
    let test = 
    {
        status_code : 500,
        data : [] 
    };

    try
    {
        const rows = await userDBC.getUsers();
        test.status_code = 200;
        if(rows.length > 0)
        {
            rows.forEach((data)=>
            {
                test.data.push
                ({
                    testData : data.test,

                });
            });
        }
        else
        {
            console.log('사용자 없음');
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
    finally
    {

        //응답 
        //res.json(res_get_users);
        var result = '';
        
        for(var i=0; i < test.data.length; i++)
        {
        result += test.data[i].testData;
  
        
        result += "<br>";
        }

        res.send(result);
    }
});


module.exports = router;