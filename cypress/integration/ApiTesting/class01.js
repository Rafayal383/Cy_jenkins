describe("Im testing an Rest API , ", () => {
  var result;
  it.skip("Simple Get Method", () => {
    result = cy.request("https://reqres.in/api/users/2");
    result.its("status").should("equal", 200);
  });

  it.skip("Validate the response of the request, GET", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      headers: {
        //content type, Authenticantion, Authorisation
        // my server will understand  im sending a request in the form of json
        //if i want my response i have to tell my header that it should be json
        //by deafault my response wil be in the string format
        accept: "application/json",
      },
    }).then((response)=>{
        // i have to convert the response in to json
        let  body = JSON.parse(JSON.stringify(response.body))
        // cy.log(body.data)
        expect(body.data).has.property('email',"janet.weaver@reqres.in")
        // cy.log(body.data.email)
        // cy.log(body.data.first_name)
        // cy.log(body.data.id)
       


         // (body.data).forEach((el) => {
        //     cy.log("id"+ obj["id"])
        // });
        let abc  = body.data

        for(let i in abc){
            cy.log(i+": "+ abc[i])
        }

    })
  });

  it.skip('post method with body', () => {
    cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        headers: {
            accept: "application/json"
        },
        body: {
            "id": "1",
            "name": "sanjay",
            "tag": "delta"
            
        }
    }).then((response)=>{
        expect(response.status).to.eql(201);
        let  body = JSON.parse(JSON.stringify(response.body))
        cy.log(body)
        cy.log(JSON.stringify(body))
    })
  });
  it('post method with body', () => {
    cy.request({
        method: "PUT",
        url: "https://reqres.in/api/users",
        headers: {
            accept: "application/json"
        },
        body: {
            "data" : 
            {
                "id": 2,
                "email": "myemail@power.com",
                "first_name": "Sanjay",
                "Avtar": ""
            }
            
        }
    }).then((response)=>{
        expect(response.status).to.eql(201);
        let  body = JSON.parse(JSON.stringify(response.body))
        cy.log(body)
        cy.log(JSON.stringify(body))
    })
  });
  it("PUT / PATCH", () => {
    let data = {
      name: "Aditya"
    };
    
    cy.request({
      method: "PUT",
      url: `https://api.trello.com/1/boards/${id}?key=${Trello_API_key}&token=${Trello_TOKEN}` ,
      headers: {
        accept: "application/json",
      },
      body: data,
    }).then((res) => {
      expect(res.status).to.eql(200);
      let rlt = JSON.stringify(res.body);
      cy.log(rlt);
    });

  });


});
