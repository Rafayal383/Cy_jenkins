// https://api.trello.com/1/boards/?name={name}&key=APIKey&token=APIToken

var Trello_API_key = "e423db47218387a9ce27ceb292a0712a"

var Trello_TOKEN = "ATTA8f247ba61a77836a5125817b821c0ed993c4f6aaab37b2cdc385cdfb03cc341830E62C27"
var nameOFboard = "sanjay"
var id = ""
describe('understanding Trello', () => {
    it.skip('Create a board', () => {

          cy.request({
            method: "POST",
            url: `https://api.trello.com/1/boards/?name=${nameOFboard}&key=${Trello_API_key}&token=${Trello_TOKEN}`,
            headers: {
              accept: "application/json",
            },
            // body: {

            // }
          }).then((res) => {
            expect(res.status).to.eql(200);
            
            let  luffy = JSON.parse(JSON.stringify(res))

            // console.log(luffy.body);
            id = luffy.body.id
            console.log(id)
            // console.log(arr)

          });
    });


    it.skip('DELETE', () => {
      cy.request({
          method: "DELETE",
          url: `https://api.trello.com/1/boards/${id}?key=${Trello_API_key}&token=${Trello_TOKEN}`,
          headers: {
              accept: "application/json",
          },
      }).then((res)=>{
          expect(res.status).to.eql(200) ;
      })
    });
});

