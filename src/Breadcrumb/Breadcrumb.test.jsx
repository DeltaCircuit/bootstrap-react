import React from "react";
import { shallow, configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

configure({ adapter: new Adapter() });

describe("Breadcrumb Unit Tests", () => {
  it("should render an empty nav div", () => {
    const wrapper = shallow(<Breadcrumb />);
    expect(wrapper.type()).toEqual("nav");
    const emptyOl = wrapper.children();
    expect(emptyOl.length).toEqual(1);
    expect(emptyOl.children("li").length).toEqual(0);
  });

  it("should render a Breadcrumb with a single Breadcrumb.Item", () => {
    const wrapper = shallow(
      <Breadcrumb>
        <Breadcrumb.Item>Hello!</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.type()).toEqual("nav");
    const breadcrumbOl = wrapper.children();
    expect(breadcrumbOl.length).toEqual(1);
    expect(breadcrumbOl.type()).toEqual("ol");
    expect(breadcrumbOl.hasClass("breadcrumb")).toEqual(true);
  });

  it("should render a Breadcrumb with a multiple Breadcrumb.Item(s)", () => {
    const itemContents = ["Item 1", "Item 2"];
    const wrapper = shallow(
      <Breadcrumb>
        <Breadcrumb.Item>Item 1</Breadcrumb.Item>
        <Breadcrumb.Item>Item 2</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.type()).toEqual("nav");
    const breadcrumbOl = wrapper.find("ol");
    expect(breadcrumbOl.length).toEqual(1);
    expect(breadcrumbOl.type()).toEqual("ol");
    expect(breadcrumbOl.hasClass("breadcrumb")).toEqual(true);
    const items = breadcrumbOl.children();
    expect(items.length).toEqual(2);
    expect(items.every(BreadcrumbItem)).toEqual(true);
    expect(items.find("li").every(".breadcrumb-item")).toEqual(true);
    const renderedItemContents = items.map(item => item.render().text());
    expect(renderedItemContents.length).toEqual(itemContents.length);
    expect(
      itemContents.every(item => renderedItemContents.includes(item))
    ).toEqual(true);
  });

  it("should render a Breadcrumb with items prop", () => {
    const itemContents = ["Item 1", "Item 2"];
    const wrapper = shallow(
      <Breadcrumb items={[{ content: "Item 1" }, { content: "Item 2" }]} />
    );
    expect(wrapper.type()).toEqual("nav");
    const breadcrumbOl = wrapper.find("ol");
    expect(breadcrumbOl.length).toEqual(1);
    expect(breadcrumbOl.type()).toEqual("ol");
    expect(breadcrumbOl.hasClass("breadcrumb")).toEqual(true);
    const items = breadcrumbOl.children();
    expect(items.length).toEqual(2);
    expect(items.every(BreadcrumbItem)).toEqual(true);
    expect(items.find("li").every(".breadcrumb-item")).toEqual(true);
    const renderedItemContents = items.map(item => item.render().text());

    expect(renderedItemContents.length).toEqual(itemContents.length);
    expect(
      itemContents.every(item => renderedItemContents.includes(item))
    ).toEqual(true);
  });

  it("should render a Breadcrumb with children instead of items prop", () => {
    const itemContents = ["Children Item 1", "Children Item 2"];
    const wrapper = shallow(
      <Breadcrumb items={[{ content: "Item 1" }, { content: "Item 2" }]}>
        <Breadcrumb.Item>Children Item 1</Breadcrumb.Item>
        <Breadcrumb.Item>Children Item 2</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.type()).toEqual("nav");
    const breadcrumbOl = wrapper.find("ol");
    expect(breadcrumbOl.length).toEqual(1);
    expect(breadcrumbOl.type()).toEqual("ol");
    expect(breadcrumbOl.hasClass("breadcrumb")).toEqual(true);
    const items = breadcrumbOl.children();
    expect(items.length).toEqual(2);
    expect(items.every(BreadcrumbItem)).toEqual(true);
    expect(items.find("li").every(".breadcrumb-item")).toEqual(true);
    const renderedItemContents = items.map(item => item.render().text());
    expect(renderedItemContents.length).toEqual(itemContents.length);
    expect(
      itemContents.every(item => renderedItemContents.includes(item))
    ).toEqual(true);
  });

  it("should render a Breadcrumb with an active item", () => {
    const wrapper = shallow(
      <Breadcrumb>
        <Breadcrumb.Item active>Item 1</Breadcrumb.Item>
        <Breadcrumb.Item>Item 2</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.type()).toEqual("nav");
    const breadcrumbOl = wrapper.find("ol");
    expect(breadcrumbOl.length).toEqual(1);
    expect(breadcrumbOl.type()).toEqual("ol");
    expect(breadcrumbOl.hasClass("breadcrumb")).toEqual(true);
    const items = breadcrumbOl.children();
    expect(items.length).toEqual(2);
    // console.log(wrapper.html());
    console.log(items.first().html());
  });
});
