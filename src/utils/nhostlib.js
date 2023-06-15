import { NhostClient } from "@nhost/nhost-js";

class NHostLib {
  constructor() {
    this.nhostClient = new NhostClient({
      backendUrl: "https://xxmrosflewhpkjxiqhde.nhost.run",
    });
  }

  async signup(email, pass, data) {
    const signupResponse = await this.nhostClient.auth.signUp({
      email: email,
      password: pass,
      options: {
        defaultRole: "user",
        displayName: "Usama",
        metadata: data,
      },
    });
    if (signupResponse.error) {
      console.log("nhost signup error: ", signupResponse.error.message);
      return {
        status: "Error",
        msg: signupResponse.error.message,
      };
    } else {
      return {
        status: "Success",
        msg: "Please verify your email",
      };
    }
  }
  async signin(email, pass) {
    console.log("Email: ", email);
    console.log("Password: ", pass);
    const signinResp = await this.nhostClient.auth.signIn({
      email: email,
      password: pass,
    });
    if (signinResp.error) {
      console.log("nhost sigin Error: ", signinResp.error);
      return {
        status: "Error",
        msg: signinResp.error.message,
      };
    } else {
      window.localStorage.setItem(
        "apsapeCurrUser",
        JSON.stringify(signinResp.session)
      );
      return {
        status: "Success",
        response: signinResp,
      };
    }
  }

  async signinWithGoogle() {
    const { session, providerUrl, provider, error } =
      await this.nhostClient.auth.signIn({
        provider: "google",
      });
    if (error) {
      console.log("nhost sigin Error: ", error);
      return {
        status: "Error",
        msg: error.message,
      };
    } else {
      window.localStorage.setItem("apsapeCurrUser", JSON.stringify(session));
      window.localStorage.setItem(
        "apsapeProviderUrl",
        JSON.stringify(providerUrl)
      );
      window.localStorage.setItem("apsapeProvider", JSON.stringify(provider));
      return {
        status: "Success",
        response: session,
      };
    }
  }

  async uploadFile(fileURI, fileName, type) {
    // console.log("File received: ", );
    const fileUploadRes = await this.nhostClient.storage.upload({
      file: {
        uri: fileURI,
        name: fileName,
        type: type,
      },
    });
    if (fileUploadRes.error) {
      console.log("nhost upload Error: ", fileUploadRes.error);
      return {
        status: "Error",
        msg: fileUploadRes.error.message,
      };
    } else {
      console.log("nhost upload success: ", fileUploadRes);
      return {
        status: "Success",
        response: fileUploadRes,
      };
    }
  }

  async resetPassword(email) {
    const response = await this.nhostClient.auth.resetPassword({ email });
    console.log(response);
    if (response.error) {
      return {
        status: "Error",
        msg: response.error.message,
      };
    } else {
      return {
        status: "Success",
        msg: "Password reset link has been sent to your email address.",
      };
    }
  }

  async changePassword(newPassword) {
    const response = await this.nhostClient.auth.changePassword({
      newPassword,
    });
    console.log(response);
    if (response.error) {
      return {
        status: "Error",
        msg: response.error.message,
      };
    } else {
      return {
        status: "Success",
        msg: "Password successfully changed.",
      };
    }
  }

  async changeEmail(newEmail) {
    const response = await this.nhostClient.auth.changeEmail({
      newEmail,
    });
    console.log(response);
    if (response.error) {
      return {
        status: "Error",
        msg: response.error.message,
      };
    } else {
      return {
        status: "Success",
        msg: "Verification  Email sent to your new email address. After verification of ypur new Email address you can signin using new email address.",
        response: response,
      };
    }
  }

  async getFileUrl(data) {
    return await this.nhostClient.storage.getUrl(data);
  }

  async uploadFile_2(data) {
    return await this.nhostClient.storage.upload(data);
  }


}

const nHostLib = new NHostLib();

export default nHostLib;
