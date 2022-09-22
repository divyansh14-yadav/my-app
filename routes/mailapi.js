import nodemailer from "nodemailer"
class nodeMailApi
{
    sendEmail(userDetails)
    {

var url = "http://localhost:3000/verifyuser?email="+userDetails.email
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yadavdevdivyansh1996@gmail.com',
    pass: 'zulqhlwfuqzdokqt'
  }
});

var mailOptions = {
  from: 'yadavdevdivyansh1996@gmail.com',
  to: userDetails.email,
  subject: 'varification mail Stock manager',
  html: "<h1>Welcome to Stock Manager</h1><p>you have Successfully registered to our site you login Credentials are attached below</p><h2>username :"+userDetails.email+"password : "+userDetails.password+"</h2><h3>click on the link below verify account</h3>"+url
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    }
}
export default new nodeMailApi()