import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Activities from "./Activities";
import Table from "./Table";
import Photos from "./Photos";
import PhotosMain from "./PhotosMain";
import PicsHanoiDay1 from "./images/hanoi-day1/hanoi-day1.js";
import PicsHanoi2 from "./images/hanoi2/hanoi2.js";
import PicsHanoi3 from "./images/hanoi3/hanoi3.js";
import PicsSaigonArrival from "./images/saigon-arrival/saigon-arrival.js";
import PicsHaLongBay1 from "./images/halongbay1/halongbay1.js";
import PicsHaLongBay2 from "./images/halongbay2/halongbay2.js";
import PicsTamcoc from "./images/tamcoc/tamcoc.js";
import Picshangtien from "./images/hang-tien/hang-tien.js";
import Picstulan from "./images/tulan/tulan.js";
import Picshue from "./images/hue/hue.js";
import Picshoian from "./images/hoi-anh/hoi-anh.js";
import Picscantho from "./images/cantho/cantho.js";
import Picsmekong from "./images/mekong/mekong.js";
import Picscantho2 from "./images/cantho2/cantho2.js";
import Picssaigon from "./images/saigon/saigon.js";
import Picsfriends from "./images/friends/friends.js";
import Picsvietcong from "./images/vietcong/vietcong.js";

export default function App() {
  return (
    <Router basename={"/vietnam"}>
      <Switch>
        <Route exact path="/">
          <PhotosMain />
        </Route>
        <Route path="/vietcong">
          <Photos tileData={Picsvietcong} />
        </Route>
        <Route path="/friends">
          <Photos tileData={Picsfriends} />
        </Route>
        <Route path="/saigon">
          <Photos tileData={Picssaigon} />
        </Route>
        <Route path="/cantho2">
          <Photos tileData={Picscantho2} />
        </Route>
        <Route path="/mekong">
          <Photos tileData={Picsmekong} />
        </Route>
        <Route path="/cantho">
          <Photos tileData={Picscantho} />
        </Route>
        <Route path="/hoian">
          <Photos tileData={Picshoian} />
        </Route>
        <Route path="/hue">
          <Photos tileData={Picshue} />
        </Route>
        <Route path="/tulan">
          <Photos tileData={Picstulan} />
        </Route>
        <Route path="/hangtien">
          <Photos tileData={Picshangtien} />
        </Route>
        <Route path="/hanoi3">
          <Photos tileData={PicsHanoi3} />
        </Route>
        <Route path="/tamcoc">
          <Photos tileData={PicsTamcoc} />
        </Route>
        <Route path="/hanoi2">
          <Photos tileData={PicsHanoi2} />
        </Route>
        <Route path="/halongbay2">
          <Photos tileData={PicsHaLongBay2} />
        </Route>
        <Route path="/halongbay1">
          <Photos tileData={PicsHaLongBay1} />
        </Route>
        <Route path="/itinerary">
          <Table showLinks={false} />
        </Route>
        <Route path="/tc">
          <Table showLinks={true} />
        </Route>
        <Route path="/photos">
          <PhotosMain />
        </Route>
        <Route path="/hanoi1">
          <Photos tileData={PicsHanoiDay1} />
        </Route>
        <Route path="/saigonarrival">
          <Photos tileData={PicsSaigonArrival} />
        </Route>
        <Route path="/activities">
          <Activities showLinks={false} />
        </Route>
      </Switch>
    </Router>
  );
}
