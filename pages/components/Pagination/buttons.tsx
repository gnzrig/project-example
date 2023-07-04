import React from "react";

interface PageProps {
  pageNum: number;
  onSelectButton: (value: number) => void;
}

const Buttons: React.FC<PageProps> = ({ pageNum, onSelectButton }) => {
  const onSubmit = (num: number) => {
    onSelectButton(num);
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < pageNum; i++) {
      buttons.push(
        <button
          onClick={() => onSubmit(i + 1)}
          className="border-2 border-blue-300 m-5"
          key={i + 1}
        >
          Button {i + 1}
        </button>
      );
    }
    return buttons;
  };
  return <div className="">{renderButtons()}</div>;
};

export default Buttons;
