export default function Footer() {
  const dataFooter = [
    {
      id: 1,
      title: "Bermitra",
      data: [
        {
          name: "Jadi Mentor",
          path: "",
        },
        {
          name: "Sponsor",
          path: "",
        },
      ],
    },
    {
      id: 2,
      title: "Legal",
      data: [
        {
          name: "Kebijakan Privasi",
          path: "",
        },
        {
          name: "Syarat Ketentuan",
          path: "",
        },
      ],
    },
    {
      id: 3,
      title: "Bergabung dengan kami",
      data: [
        {
          name: "instagram.png",
          path: "",
        },
        {
          name: "youtube.png",
          path: "",
        },
      ],
    },
  ];

  return (
    <footer className="max-w-7xl m-auto bg-white p-10 text-black flex flex-col gap-10 text-left">
      <hr />
      <div className="flex flex-row  ">
        <div className="text-[12px] flex flex-col gap-2 w-[50%]">
          <img
            src="/public/assets/image/logo-brand.png"
            alt="logo"
            className="w-[190px] h-auto cursor-pointer"
          />
          <h4>Beauty Preneur Office.</h4>
          <h5>Bekasi.</h5>
        </div>
        <div className="w-[48%] gap-10 flex flex-row justify-between ">
          {dataFooter?.map((item, index) => (
            <div
              key={index}
              className="text-[12px] flex flex-col gap-2"
            >
              <h4>{item.title}</h4>
              <div className={`flex ${item.id === 3 ? "flex-row" : "flex-col"} gap-2`}>
                {item?.data?.map((dt, index) => {
                  if (item.id !== 3) {
                    return (
                      <div key={index}>
                        <h4>{dt.name}</h4>
                      </div>
                    );
                  } else {
                    return (
                      <img
                        key={index}
                        src={`/public/assets/icons/${dt.name}`}
                        alt="logo"
                        className="w-[24px] h-[22px]"
                      />
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <h4 className="text-[12px]">
        Beauty Preneur @ 2024. All rights reserved.
      </h4>
    </footer>
  );
}
