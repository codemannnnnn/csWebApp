const axios = require("axios");
const { DOMParser } = require("xmldom");
const qs = require("querystring");

var data =
  '<?xml version="1.0" encoding="utf-8"?>\r\n<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n  <soap:Body>\r\n    <ProcessDocument xmlns="http://glsuite.us/">\r\n     <docXml>\r\n<root xmlns="">\r\n    <Requests>\r\n    <Request RequestTypeID="2" ResponseOnly="True">\r\n    <Object ObjectID="1" ObjectPK="1000009">\r\n        <Object ObjectID="34" ActionTypeID="1">\r\n        <Property ObjectPK="76" Name="ObjectTypeID" ActionTypeID="2">10934</Property>\r\n        </Object>\r\n    </Object>\r\n    </Request>\r\n    </Requests>\r\n<UserToken EntityID="1260091" FirstName="AKCCED_SI" MiddleName="" LastName="WebService" EntityName="AKCCED_SI WebService" EntitySecurity="False" NTUserName="AKCCED_SI_WebService" AdhocReporting="False" AdhocReportingKey="" SecureLoginCode="" QuestionsHistoryID="-1" SystemMFATypeID="0" UserMFATypeID="0" MFASecretOPVID="-1" MFATimeout="0" Expiration="2043-01-06T06:36:13.971">\r\n<UserGroup EntityName="All Users Group">999989</UserGroup>\r\n<UserGroup EntityName="AKCCED_SI_WebService">-3</UserGroup><![CDATA[cUTegifXx0FUGdfu/vZqaFlcoED+sGLruRroNsvbvcDdUyYtpS9v1IhncfLxDhmfvM+ipECMUgc=]]></UserToken>\r\n</root>\r\n </docXml>\r\n</ProcessDocument>\r\n  </soap:Body>\r\n</soap:Envelope> ';
var url = "https://akcceddev.glsuite.us/BusinessTier/Public/RuleProcessor.asmx";
var config = {
  headers: {
    "Content-Type": "text/xml; charset=utf-8",
    SOAPAction: '"http://glsuite.us/ProcessDocument"',
  },
  data: data,
};

const grabData = async () => {
  var res = await axios
    .post(url, data, config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

grabData();
