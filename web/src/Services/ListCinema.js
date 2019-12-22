import { restConnector } from "./index";

class ListCinemaService {
  getCinemas() {
    restConnector({
      url: "/list-cinemas",
      method: "GET"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }
}

export default new ListCinemaService();
