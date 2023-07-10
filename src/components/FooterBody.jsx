import FooterBodyHeading from "./FooterBodyHeading";
import FooterBodyList from "./FooterBodyList";

const FooterBody = () => {
  const items = [
    {
      id: "1",
      title: "CONTACT",
      list: [
        {
          id: "0",
          text: "Company",
        },
        {
          id: "1",
          text: "Customer Support",
        },
        {
          id: "2",
          text: "Submit a Request",
        },
        {
          id: "4",
          text: "Support Center",
        },
      ],
    },
    {
      id: "2",
      title: "ABOUT NZXT",
      list: [
        {
          id: "0",
          text: "Founder Q & A",
        },
        {
          id: "1",
          text: "Careers",
        },
        {
          id: "2",
          text: "Customer Reviews",
        },
      ],
    },
    {
      id: "3",
      title: "COMMUNITY",
      list: [
        {
          id: "0",
          text: "Newsroom & Blog",
        },
        {
          id: "1",
          text: "Our Discord",
        },
      ],
    },
    {
      id: "4",
      title: "SOFTWARE",
      list: [
        {
          id: "0",
          text: "CAM",
        },
        {
          id: "1",
          text: "CAM Feedback",
        },
      ],
    },
    {
      id: "5",
      title: "ACCOUNT",
      list: [
        {
          id: "0",
          text: "Manage Your Account",
        },
      ],
    },
    {
      id: "6",
      title: "NZXT STORE",
      list: [
        {
          id: "0",
          text: "NZXT BLD PC",
        },
        {
          id: "1",
          text: "Refurbished Builds",
        },
        {
          id: "2",
          text: "FAQ",
        },
        {
          id: "3",
          text: "Find a Retailer",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-12 text-white">
      <FooterBodyHeading />
      <div className=" mt-12 md:grid grid-cols-3 gap-8">
        {items.map((item) => (
          <FooterBodyList key={item.id} title={item.title} list={item.list} />
        ))}
      </div>
    </div>
  );
};

export default FooterBody;
