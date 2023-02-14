let dataObj = {};
        function modifyDom(id,txt){
            document.getElementById(id).innerHTML = txt;
        }
        async function getUser() {
            modifyDom("additionalInfo",`
            <p id="age"></p>
                <p id="email"></p>
                <p id="phone"></p>
            `);
          const response = await fetch("https://randomuser.me/api/").then((response)=>response.json()).catch((error)=> console.log(error));
          let result = response.results[0];
          dataObj.fullName = result.name.first + " " + result.name.last;
          dataObj.imgSrc = result.picture.large;
          dataObj.age = result.dob.age ;
          dataObj.email = result.email;
          dataObj.phone = result.phone;
          modifyDom("fullName", dataObj.fullName);
          document.getElementById("img").setAttribute("src", dataObj.imgSrc);
        }
        getUser();

        function getData(ele){
            let newEle = ele.getAttribute("data-attr");
            modifyDom(newEle,dataObj[newEle]);
        }