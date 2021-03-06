const app_config = {
  singleApiKey: true,
  isSingleCondition: false,
  multipleErrorMessage: true,
};
const api_config = {
  authtoken: {
    "6668": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "authtoken",
      method: "POST",
      requestType: "application/x-www-form-urlencoded",
      responseType: "application/json",
      successResponseBasePath: "",
      successResponseKey: "status",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        access_token: "access_token",
        token_type: "token_type",
        expires_in: "expires_in",
        refresh_token: "refresh_token",
        "as:client_id": "as:client_id",
        Ref: "Ref",
        userName: "userName",
        status: "status",
        userID: "userID",
        userFullName: "userFullName",
        RoleCount: "RoleCount",
        FirstName: "FirstName",
        LastName: "LastName",
        failCount: "failCount",
        GuiToken: "GuiToken",
        ".issued": ".issued",
        ".expires": ".expires",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: [
        {
          grant_type: "grant_type",
          username: "username",
          password: "password",
          client_id: "client_id",
        },
      ],
      transformed_json: [],
    },
  },
  "UserAccounts/create": {
    "6664": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/UserAccounts/Create",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "",
      successResponseKey: "status",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        mailid: "mailid",
        userId: "userId",
        code: "code",
        exception: "exception",
        FullName: "FullName",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        CompanyName: "CompanyName",
        FirstName: "FirstName",
        LastName: "LastName",
        Email: "Email",
        UserName: "UserName",
        Password: "Password",
        SecurityQuestion1: "SecurityQuestion1",
        SecurityAnswer1: "SecurityAnswer1",
        SecurityQuestion2: "SecurityQuestion2",
        SecurityAnswer2: "SecurityAnswer2",
        SecurityQuestion3: "SecurityQuestion3",
        SecurityAnswer3: "SecurityAnswer3",
      },
      transformed_json: [],
    },
  },
  "Account/ForgotUserName": {
    "7379": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/Accounts/ForgotUserName",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "",
      successResponseKey: "status",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        userID: "userID",
        question1: "question1",
        question2: "question2",
        question3: "question3",
        FullName: "FullName",
        UserName: "UserName",
        Rcount: "Rcount",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        email: "email",
      },
      transformed_json: [],
    },
  },
  "DSBProvisional/GetNavigationScreen": {
    "6402": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6403": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6404": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: 200,
        message: "Success",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6405": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6396": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6397": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6841": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6833": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6866": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6874": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetNavigationScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
  },
  "DsbCategory/DashBoadSearch": {
    "6672": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/DashBoadSearch",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "",
      successResponseKey: "message",
      errorResponseBasePath: "data",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: [
        {
          UserID: "UserID",
          LicenseNo: "LicenseNo",
          Status: "Status",
          Keyword: "Keyword",
          FromDate: "FromDate",
          ToDate: "ToDate",
        },
      ],
      transformed_json: [],
    },
  },
  "DSBCategory/GetBBLLicense": {
    "6399": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "API/DSBCategory/GetBBLLicense",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
  },
  "DSBCategory/GetAllCountry": {
    "6396": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6403": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6404": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6405": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6841": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6833": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6866": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6874": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllCountry",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        AppType: "AppType",
        LicenseNo: "LicenseNo",
        UserID: "UserID",
      },
      transformed_json: [],
    },
  },
  "DSBCategory/GetAllState": {
    "6396": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllState",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6833": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllState",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6841": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllState",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6866": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllState",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6874": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DSBCategory/GetAllState",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "[*]",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
  },
  "DsbCategory/ScreenLockingMaster": {
    "6396": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/ScreenLockingMaster",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6397": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/ScreenLockingMaster",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6833": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/ScreenLockingMaster",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6866": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/ScreenLockingMaster",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6874": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/ScreenLockingMaster",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6841": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/ScreenLockingMaster",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
    "6402": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/ScreenLockingMaster",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
  },
  "DsbCategory/SavePreScreen": {
    "6397": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/SavePreScreen",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        UserID: "UserID",
        LicenseNo: "LicenseNo",
        LicenseFee: "LicenseFee",
        BalanceAmt: "BalanceAmt",
        IsAgree: "IsAgree",
        ClassType: "ClassType",
        ReviewerStatus: "ReviewerStatus",
        LicenseStatus: "LicenseStatus",
        ActivationDate: "ActivationDate",
        IsActive: "IsActive",
        ExpireDate: "ExpireDate",
        ApplicantName: "ApplicantName",
        EmployerName: "EmployerName",
        SignFirstName: "SignFirstName",
        SignMiddleName: "SignMiddleName",
        SignLastName: "SignLastName",
        Custome1: "Custome1",
        Custome2: "Custome2",
        Custome3: "Custome3",
        Custome4: "Custome4",
        CreateDate: "CreateDate",
        UpdateDate: "UpdateDate",
        CreatedBy: "CreatedBy",
        UpdatedBy: "UpdatedBy",
        PreScreen_Vstatus: "PreScreen_Vstatus",
      },
      transformed_json: [],
    },
  },
  "DsbCategory/GetPrescreenStatus": {
    "6397": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/GetPrescreenStatus",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
      error_response: {
        status: "status",
        Message: "Message",
        data: "data",
      },
      request: {
        LicenseNo: "LicenseNo",
        AppType: "AppType",
        UserID: "UserID",
      },
      transformed_json: [],
    },
  },
  "DsbCategory/SaveLicensePermit": {
    "6402": {
      url: "https://lbsplatform-dev.inadev.net",
      end_point: "api/DsbCategory/SaveLicensePermit",
      method: "POST",
      requestType: "application/json",
      responseType: "application/json",
      successResponseBasePath: "data",
      successResponseKey: "message",
      errorResponseBasePath: "",
      path_variable: {},
      query_parameter: {},
      header: {},
      sucess_response: {
        status: "status",
        message: "message",
        data: "{}",
      },
    },
    error_response: {
      status: "status",
      Message: "Message",
      data: "data",
    },
    request: {
      LicensePermitID: "LicensePermitID",
      UserID: "UserID",
      LicenseNo: "LicenseNo",
      IsApplicableLicensePermit: "IsApplicableLicensePermit",
      Custome1: "Custome1",
      Custome2: "Custome2",
      Custome3: "Custome3",
      Custome4: "Custome4",
      CreateDate: "CreateDate",
      UpdateDate: "UpdateDate",
      CreatedBy: "CreatedBy",
      UpdatedBy: "UpdatedBy",
      V_Status: "V_Status",
      lstDSBLicensePermitEntity: "[*]",
    },
    transformed_json: [],
  },
};

export { app_config, api_config };
