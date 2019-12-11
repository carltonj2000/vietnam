import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Activities from "./Activities";
import Table from "./Table";
import Photos from "./Photos";
import PhotosMain from "./PhotosMain";
import PicsHanoiDay1 from "./img_hanoi-day1";
import PicsHanoi2 from "./img_hanoi2";
import PicsHanoi3 from "./img_hanoi3";
import PicsSaigonArrival from "./img_saigon-arrival";
import PicsHaLongBay1 from "./img_halongbay1";
import PicsHaLongBay2 from "./img_halongbay2";
import PicsTamcoc from "./img_tamcoc";
import Picshangtien from "./img_hang-tien";
import Picstulan from "./img_tulan";
import Picshue from "./img_hue";
import Picshoian from "./img_hoi-anh";
import Picscantho from "./img_cantho";
import Picsmekong from "./img_mekong";
import Picscantho2 from "./img_cantho2";

export default function App() {
  return (
    <Router basename={"/vietnam"}>
      <Switch>
        <Route exact path="/">
          <PhotosMain />
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
