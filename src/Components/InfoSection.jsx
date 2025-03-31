const InfoSection = () => {
    const infoItems = [
      {
        icon: "💬", // Replace with an actual icon
        title: "Get in touch",
        description: "Expert help & advice",
      },
      {
        icon: "↩️", // Replace with an actual icon
        title: "Returns & exchanges",
        description: "All you need to know",
      },
      {
        icon: "🎁", // Replace with an actual icon
        title: "Rewards",
        description: "Unlock Exclusive Benefits",
      },
      {
        icon: "📦", // Replace with an actual icon
        title: "Bulk Order",
        description: "Get Customized Stationery",
      },
    ];
  
    return (
      <div className="flex justify-between bg-gray-100 p-6 border-t mt-15">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center w-1/4">
            <span className="text-3xl mb-2">{item.icon}</span>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default InfoSection;
  