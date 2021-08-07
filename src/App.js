import React from "react"

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    var sendNotification = function (data) {
      var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic ZTYwMGE1NjgtODUwNi00ZTkxLWI0NTMtN2M0Mzk1YmE5NDg3"
      };

      var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
      };

      var https = require('https');
      var req = https.request(options, function (res) {
        res.on('data', function (data) {
          console.log("Response:");
          console.log(JSON.parse(data));
        });
      });

      req.on('error', function (e) {
        console.log("ERROR:");
        console.log(e);
      });

      req.write(JSON.stringify(data));
      req.end();
    };

    var message = {
      app_id: "c21a2fda-d1b7-49dd-8325-d1cf85bd7c1a",
      contents: { "en": "New Notification..." },
      included_segments: ["Subscribed Users"]
    };

    sendNotification(message);
  }

  return (
    <div>
      Hello
      <form onSubmit={handleSubmit}>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App