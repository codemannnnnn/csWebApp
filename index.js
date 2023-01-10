const axios = require("axios");
const { DOMParser } = require("xmldom");

const data = require("./spCalls");

var text =
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
  "<soap:Body>" +
  '   <ProcessDocument xmlns="http://glsuite.us/">' +
  "    <docXml>" +
  '<root xmlns="">' +
  "<Requests>" +
  '<Request RequestTypeID="2" ResponseOnly="True">' +
  ' <Object ObjectID="1" ObjectPK="1000009">' +
  '   <Object ObjectID="34" ActionTypeID="1">' +
  '     <Property ObjectPK="76" Name="ObjectTypeID" ActionTypeID="2">10934</Property>' +
  "   </Object>" +
  " </Object>" +
  "</Request>" +
  "</Requests>" +
  '<UserToken EntityID="1260091" FirstName="AKCCED_SI" MiddleName="" LastName="WebService" EntityName="AKCCED_SI WebService" EntitySecurity="False" NTUserName="AKCCED_SI_WebService" AdhocReporting="False" AdhocReportingKey="" SecureLoginCode="" QuestionsHistoryID="-1" SystemMFATypeID="0" UserMFATypeID="0" MFASecretOPVID="-1" MFATimeout="0" Expiration="2043-01-06T06:36:13.971">' +
  '<UserGroup EntityName="All Users Group">999989</UserGroup>' +
  '<UserGroup EntityName="AKCCED_SI_WebService">-3</UserGroup><![CDATA[cUTegifXx0FUGdfu/vZqaFlcoED+sGLruRroNsvbvcDdUyYtpS9v1IhncfLxDhmfvM+ipECMUgc=]]></UserToken>' +
  "</root>" +
  " </docXml>" +
  "</ProcessDocument>" +
  "  </soap:Body>" +
  "</soap:Envelope>";

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(text, "text/xml");

xmlDoc.documentElement.setAttribute("x", "y");
xmlDoc.documentElement.setAttributeNS("./lite", "c:x", "y2");
// console.info(xmlDoc);

const getData = async (doc) => {
  try {
    const url =
      "https://akcceddev.glsuite.us/BusinessTier/Public/RuleProcessor.asmx";

    var res = await axios.post(url, doc, {
      headers: {
        contentType: "text/xml",
        soapAction: "http://glsuite.us/ProcessDocument",
      },
    });
    //   console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

getData(xmlDoc);

// console.log(data.sp1);
