import * as Ariakit from "@ariakit/react";
import "./style.css";

export default function Example() {
  const select = Ariakit.useSelectStore({ defaultValue: "Apple" });
  return (
    <div className="wrapper">
      <Ariakit.SelectLabel store={select}>Favorite food</Ariakit.SelectLabel>
      <Ariakit.Select store={select} className="select" />
      <Ariakit.SelectPopover
        store={select}
        gutter={4}
        sameWidth
        className="popover"
      >
        <Ariakit.SelectGroup className="group">
          <Ariakit.SelectGroupLabel className="group-label">
            Fruits &amp; Vegetables
          </Ariakit.SelectGroupLabel>
          <Ariakit.SelectItem
            // Enables scroll on key down so pressing ArrowUp will scroll up and
            // reveals the group label.
            preventScrollOnKeyDown={false}
            className="select-item"
            value="Apple"
          />
          <Ariakit.SelectItem className="select-item" value="Banana" />
          <Ariakit.SelectItem className="select-item" value="Grape" />
          <Ariakit.SelectItem className="select-item" value="Orange" />
        </Ariakit.SelectGroup>
        <Ariakit.SelectSeparator className="separator" />
        <Ariakit.SelectGroup className="group">
          <Ariakit.SelectGroupLabel className="group-label">
            Dairy
          </Ariakit.SelectGroupLabel>
          <Ariakit.SelectItem className="select-item" value="Milk" />
          <Ariakit.SelectItem className="select-item" value="Cheese" />
          <Ariakit.SelectItem className="select-item" value="Yogurt" />
        </Ariakit.SelectGroup>
        <Ariakit.SelectSeparator className="separator" />
        <Ariakit.SelectGroup className="group">
          <Ariakit.SelectGroupLabel className="group-label">
            Beverages
          </Ariakit.SelectGroupLabel>
          <Ariakit.SelectItem className="select-item" value="Water" />
          <Ariakit.SelectItem className="select-item" value="Juice" />
          <Ariakit.SelectItem className="select-item" value="Soda" />
        </Ariakit.SelectGroup>
        <Ariakit.SelectSeparator className="separator" />
        <Ariakit.SelectGroup className="group">
          <Ariakit.SelectGroupLabel className="group-label">
            Snacks
          </Ariakit.SelectGroupLabel>
          <Ariakit.SelectItem className="select-item" value="Chips" />
          <Ariakit.SelectItem className="select-item" value="Nuts" />
          <Ariakit.SelectItem className="select-item" value="Candy" />
        </Ariakit.SelectGroup>
      </Ariakit.SelectPopover>
    </div>
  );
}
