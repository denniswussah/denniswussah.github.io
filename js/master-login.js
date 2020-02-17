*{
  margin: 0;
}
.error-txt{
  color: red;
  font-size: 75%;
}
.border-error-ui{
  border-color: red;
}
.btn-pref{
  padding: 10px;
  width: 80px;
  border-radius: 2px;
  border-color: transparent;
}
html, body{
  background: #18113d;
}
body{
  background-repeat: no-repeat;
  background-size: cover;
}
.login-container{
  background-position: center;
  background-size: cover;
  color: #fff;
  height: 100%;
  top: 0;
  margin-bottom: 87px;
}

/* WARNING: login box */
.login-box{
  width: 84%;
  background: #fff;
  color: black;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  overflow: hidden;
}
@media screen and (max-width:600px) {
  .login-box{
    width: 95%;
    padding: 10px 0;
  }
}
.login-title{
  font-family: arial;
  margin-left: 4px;
  letter-spacing: 1px;
}
.box{
  background: #f5f5f5;
  padding: 5px;
}
.login-row form{
  padding: 10px 0;
}
fieldset{
  margin-top: 5px;
  border-radius: 5px;
}
fieldset input{
  width: 95%;
  margin-top: 2px;
  padding: 5px;
  border-radius: 5px;
  border-color: transparent;
}
.input-holder{
  display: inline-block;
  width: 100%;
  padding: 5px 0;
}
.input-holder label{
  font-family: verdana;
  font-size: 90%;
}
.error-message{
  color: red;
  font-size: 70%;
  font-family: arial;
  font-style: oblique;
  cursor: pointer;
  display: none;
}
.input-holder .btn-pref{
  margin-top: 10px;
}

.security-row{

}
.security-info-title{
  text-align: center;
  background: blue;
  display: block;
  padding: 10px 0;
}
.info-fields{
  display: block;
  border-bottom: 1px solid black;
  font-size: 80%;
  margin-left: 4px;
  padding: 20px 0;
}
.acknowledge-box{
  margin-top: 5px;
  display: block;
}
.acknowledge-box span{
  color: red;
}

/* WARNING: USERNAME SECTION & PASSWORD SECTION PROTOCOL */
.for-password{
  display: none;
}


/* WARNING: JQUERYS */
@media screen and (min-width: 1000px)
 {
   .box{
     width: 65%;
     float: left;
   }
   .security-row{
     width: 30%;
   }
}


/* WARNING: ACCOUNTS */
.account-container{
  background-color: #fff!important;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  margin-top: 106px;
  padding: 10px;
  border-radius: 12px;
  display: block;/* WARNING: changes */
}
.account-details-box{
  font-family: arial;
  letter-spacing: 2px;
  font-weight: lighter;
}
.account-holder{
  overflow: hidden;
}
.affix {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: none;
    background: rgba(0,0,0,0.8);
}
.account-nav-holder{
  text-align: center;
  margin: 15px auto;
  background: rgba(0,0,0,0.8);
}
.account-nav-holder span{
  background: rgb(62, 46, 255);
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  margin-top: 5px;
  width: 18%;
  font-size:10px;
}

@media screen and (max-width:424px) {
  .account-nav-holder span{
    width: 20%;
    font-size:53%;
    padding: 5px 3px;
  }
  #us-txt{
    display: none;
  }
}
.account-status-box{
  border: 1px solid black;
  display: inline-block;
  padding: 10px;
  margin-top: 80px;
  color: green;
  margin-bottom: 10px;
}
.account-status-box i{
  color: green;
}
.box2{
  width: 100%;
}
.proper-table{
}
.proper-table table, .proper-table th, .proper-table td {
  border-bottom: 1px solid black;
  border-collapse: collapse;
  width: 100%;
}
.proper-table th, .proper-table td {
  padding: 5px;
  text-align: left;
}
.proper-table td{
  width: 80%;
}
.data-box{
  width: 50%!important;
  background: rgb(186, 184, 207);
  color: rgb(109, 103, 171);
  font-weight: bold;
}

@media screen and (min-width: 600px)
and (max-width: 5000px) {
  .box2{
    float: left;
    width: 48%;
  }
}
.title{
  background: rgb(54, 54, 54)!important;
  color: #fff;
}
.box2 span{
  background: #e3e3e3;
  display: inline-block;
  width: 49%;
}
.box2 span ul li{
  padding: 5px 0;
  list-style: none;
  border-bottom: 1px solid #fff;
}
.active-effect{
  background: #000!important;
  color: #fff;
  text-decoration: underline;
}

.transaction-box{
  overflow: hidden;
  text-align: center;
  width: 99%;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
}
.transaction-box table{
  border-collapse: collapse;
}
.transaction-box th{
  border: 1px solid #000;
  padding: 5px;
  width: 39%;
  font-size: 90%;
}
.transaction-box td{
  padding: 5px;
  border-collapse: collapse;
  font-size: 70%;
}
.shade-blue{
  background: rgb(171, 163, 255);
}
.description{
  font-size: 73%;
}
.paybills-section{
  position: relative;
}
.paybills-section span{
  margin-left: 0.2%;
  height: 178px;
  width: 47%;
  margin-top: 10px;
  display: inline-block;
  border: 1px solid #000;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  text-align: center;
  padding: 10px;
}
.bill-box i{
  width: 100%;
  font-size: 110px;
}
.question-box{
  margin-top: 72px;
}
@media screen and (max-width: 526px) {
  .paybills-section span{
    width: 95%;
    margin-left: 3%;
  }
}
.paybills-section span img{
  width: 90PX;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 46px;
}
.paybills-section span p{

}
.payelectric{
  background-size: contain;
  background: #fff;
}

.bill-box{
  width: 100%;
  background: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  z-index: 11;
  left: 0;
  height: 100%;
  right: 0;
  display: none;
}

.code-form{
  background: snow;
  padding: 10px;
  margin-top: 13%;
  position: relative;
}
.code-form .btn-box{
  width: 100%;
  text-align: right;
}
.center{
  text-align: center;
}
.code-form .close-btn{
  margin-right: 13px;
  font-size: 22px;
}
.code-form input{
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
/* WARNING: TRANSFER */
.transfer-box h3{
  font-weight: lighter;

}
.transfer-box input{
  border: 1px solid #000;
  width: 75%;
}
#swiftcode-input{
  width: inherit;
}
.receivername-input, .bankname-input{
  text-transform: uppercase;
}
@media screen and (min-width: 900px) {
  .security-form{
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
}
.security-form label{
  font-size: 20px;
  font-family: sans-serif;
}
.security-form table{
  border-collapse: collapse;
  text-align: center;
}
.security-form td{
  border: 1px solid black;
  border-left-color: transparent;
  border-right-color: transparent;
  width: 14%;
  padding: 5px;
  font-size: 15px;
}
.transfer-security-box{
  font-family: arial;
}
.secretcode-btn{
  display: block!important;
  width: 81px;
  margin: 0 auto;
}
.secretcode-input{
  display: block;
  margin: 0 auto;
  width: 30%!important;
  text-align: center;
  font-family: verdana;
  border-color: #7d0000;
}
.bankname-txt, .receivername-txt{
  text-transform: uppercase;
  font-size: 75%!important;
}
.title-box{
  border: 1px solid #000;
  padding: 37px;
  letter-spacing: 3px;
}
.bold-txt{
  font-weight: bold;
}
.contact-us-container h3{
  font-weight: lighter;
}
.contact-us-container input{
  border-radius: 5px;
  padding: 10px;
  width: 75%;
}
.message-box{
  width: 70%;
}


//******************//
.cool-green-btn{
  background:    #00ff00!important;
  background:    linear-gradient(#00ff00, #38761d)!important;
}
.cool-btn{
  background:    #3d85c6;
  background:    linear-gradient(#3d85c6, #073763);
  border-radius: 5px;
  box-shadow:    0 1px #444444;
  padding:       8px 20px;
  color:         #ffffff;
  display:       inline-block;
  text-align:    center;
  text-shadow:   1px 1px #000000;
}