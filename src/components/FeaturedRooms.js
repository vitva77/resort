import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);

    return (
      <div>
        from featured rooms
        <Room />
        <Loading />
      </div>
    );
  }
}
