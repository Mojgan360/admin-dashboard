import React from "react";
import styled from "styled-components";

import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      // dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecto! Natus, ea
      quisquam accusantium quae dolore, quos harum, id ab voluptate laborum
      voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Adipisci, totam architecto aliquid praesentium maiores quas labore
      incidunt ex nam iure perspiciatis quisquam facere cumque quam sapiente
      tempora harum porro atque exercitationem similique repudiandae quos
      laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis cupiditate
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architect Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Adipisci, totam architecto aliquid praesentium maiores quas labore
      incidunt ex nam iure perspiciatis quisquam facere cumque quam sapiente
      tempora harum porro atque exercitationem similique repudiandae quos
      laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis cupiditate
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecto! Natus, ea quisquam accusantium quae dolore, quos harum, id ab
      voluptate laborum voluptatem! Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Adipisci, totam architecto aliquid praesentium maiores
      quas labore incidunt ex nam iure perspiciatis quisquam facere cumque quam
      sapiente tempora harum porro atque exercitationem similique repudiandae
      quos laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis
      cupiditate officiis nam. Ipsum ratione, nemo esse ab praesentium dicta
      maiores blanditiis perferendis optio eius nulla, voluptate, sit maxime
      dolorem architect Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Adipisci, totam architecto aliquid praesentium maiores quas labore
      incidunt ex nam iure perspiciatis quisquam facere cumque quam sapiente
      tempora harum porro atque exercitationem similique repudiandae quos
      laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis cupiditate
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecto! Natus, ea quisquam accusantium quae dolore, quos harum, id ab
      voluptate laborum voluptatem! Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Adipisci, totam architecto aliquid praesentium maiores
      quas labore incidunt ex nam iure perspiciatis quisquam facere cumque quam
      sapiente tempora harum porro atque exercitationem similique repudiandae
      quos laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis
      cupiditate officiis nam. Ipsum ratione, nemo esse ab praesentium dicta
      maiores blanditiis perferendis optio eius nulla, voluptate, sit maxime
      dolorem architect Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Adipisci, totam architecto aliquid praesentium maiores quas labore
      incidunt ex nam iure perspiciatis quisquam facere cumque quam sapiente
      tempora harum porro atque exercitationem similique repudiandae quos
      laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis cupiditate
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecto! Natus, ea quisquam accusantium quae dolore, quos harum, id ab
      voluptate laborum voluptatem! Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Adipisci, totam architecto aliquid praesentium maiores
      quas labore incidunt ex nam iure perspiciatis quisquam facere cumque quam
      sapiente tempora harum porro atque exercitationem similique repudiandae
      quos laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis
      cupiditate officiis nam. Ipsum ratione, nemo esse ab praesentium dicta
      maiores blanditiis perferendis optio eius nulla, voluptate, sit maxime
      dolorem architecticing elit. Adipisci, totam architecto aliquid
      praesentium maiores quas labore incidunt ex nam iure perspiciatis quisquam
      facere cumque quam sapiente tempora harum porro atque exercitationem
      similique repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus
      unde perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.te
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.te
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.te
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.te
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.te
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.te
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.te
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architecticing elit. Adipisci, totam
      architecto aliquid praesentium maiores quas labore incidunt ex nam iure
      perspiciatis quisquam facere cumque quam sapiente tempora harum porro
      atque exercitationem similique repudiandae quos laboriosam ipsam quae.
      Esse ipsa nemo delectus unde perferendis cupiditate officiis nam. Ipsum
      ratione, nemo esse ab praesentium dicta maiores blanditiis perferendis
      optio eius nulla, voluptate, sit maxime dolorem architecticing elit.
      Adipisci, totam architecto aliquid praesentium maiores quas labore
      incidunt ex nam iure perspiciatis quisquam facere cumque quam sapiente
      tempora harum porro atque exercitationem similique repudiandae quos
      laboriosam ipsam quae. Esse ipsa nemo delectus unde perferendis cupiditate
      officiis nam. Ipsum ratione, nemo esse ab praesentium dicta maiores
      blanditiis perferendis optio eius nulla, voluptate, sit maxime dolorem
      architecticing elit. Adipisci, totam architecto aliquid praesentium
      maiores quas labore incidunt ex nam iure perspiciatis quisquam facere
      cumque quam sapiente tempora harum porro atque exercitationem similique
      repudiandae quos laboriosam ipsam quae. Esse ipsa nemo delectus unde
      perferendis cupiditate officiis nam. Ipsum ratione, nemo esse ab
      praesentium dicta maiores blanditiis perferendis optio eius nulla,
      voluptate, sit maxime dolorem architect
    </Container>
  );
};

export default Ecommerce;
