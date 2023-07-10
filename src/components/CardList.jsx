import CardListItems from "./CardListItems";

const CardList = () => {
  const itemList = [
    {
      id: "1",
      images: `https://nzxt.com/assets/cms/34299/1653593619-cooling-fans_f-rgb-fans-with-controller_2000x2000_f140rgb-twins-w.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `2 Colors`,
      price: `$69.99`,
      size: `2 x 140mm RGB Fans & Controller`,
      partsName: `F140 RGB Twin Pack`,
    },
    {
      id: "2",
      images: `https://nzxt.com/assets/cms/34299/1673560297-peripherals_audio_capsule-mini_w_hero_png.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `2 Colors`,
      price: `$69.99`,
      size: `Small Gaming Microphone With Unidirectional Cardioid Polar Pattern`,
      partsName: `Capsule Mini`,
    },
    {
      id: "3",
      images: `https://nzxt.com/assets/cms/34299/1656059954-10.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `1 Color`,
      price: `$139.99`,
      size: `HD60 External Capture Card`,
      partsName: `Signal HD60`,
    },
    {
      id: "5",
      images: `https://nzxt.com/assets/cms/34299/1646952478-lift-white-hero.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `6 Color`,
      price: `$49.99`,
      size: `Lightweight Symmetrical Mouse`,
      partsName: `Lift (White)`,
    },
    {
      id: "6",
      images: `https://nzxt.com/assets/cms/34299/1653004130-accessories_vertical_gpu_mount_kit_w_hero_png.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `2 Color`,
      price: `$89.99`,
      size: `GPU Holder & PCIe 4.0 Riser Cable`,
      partsName: `Vertical GPU Mounting Kit`,
    },
    {
      id: "7",
      images: `https://nzxt.com/assets/cms/34299/1615571268-internal-usb-hub-3-top.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `1 Color`,
      price: `$24.99`,
      size: `Internal USB 2.0 Expansion Hub`,
      partsName: `Internal USB Hub (Gen 3)`,
    },
    {
      id: "8",
      images: `https://nzxt.com/assets/cms/34299/1615594878-rgb-led-strip-accessory-200mm.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `1 Color`,
      price: `$17.99`,
      size: `Individually Addressabled LED Strips`,
      partsName: `RGB LED Strips 200mm`,
    },
    {
      id: "9",
      images: `https://nzxt.com/assets/cms/34299/1655500197-accessories_thermal_paste_15g_right_png.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `1 Color`,
      price: `$19.99`,
      size: `High-performance Thermal Paste`,
      partsName: `High-performance Thermal Paste (15g)`,
    },
    {
      id: "10",
      images: `https://nzxt.com/assets/cms/34299/1647027444-lift-black-hero.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `6 Color`,
      price: `$49.99`,
      size: `Lightweight symmetrical Mouse`,
      partsName: `Lift (Black)`,
    },
    {
      id: "11",
      images: `https://nzxt.com/assets/cms/34299/1646935563-mousepad-small-grey-top.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `6 Color`,
      price: `$49.99`,
      partsName: `MMP400`,
      size: `Standard Mouse Pad`,
    },
    {
      id: "12",
      images: `https://nzxt.com/assets/cms/34299/1646935638-mousepad-medium-grey-top.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `3 Color`,
      price: `$29.99`,
      partsName: `MMP700`,
      size: `Mid-Size Extended Mouse Pad`,
    },
    {
      id: "13",
      images: `https://nzxt.com/assets/cms/34299/1646935638-mousepad-medium-grey-top.png?ar64=MTox&auto=format&fit=crop&h=400&w=400`,
      colors: `3 Color`,
      price: `$29.99`,
      partsName: `MXL900`,
      size: `Extra Large Extended Mouse Pad`,
    },
  ];

  return (
    <div className=" py-2 px-1 lg:col-span-3">
      <h1 className=" font-bold text-[25px] mb-4 lg:text-4xl">
        Before You Go...
      </h1>
      <div className=" grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 2xl:grid-cols-4">
        {itemList.map((item) => (
          <CardListItems
            key={item.id}
            images={item.images}
            colors={item.colors}
            price={item.price}
            size={item.size}
            partsName={item.partsName}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
