import React, { useState } from 'react';

const Section7 = () => {
  const items = [
    { i1: '2025.09.26', i2: '웹디자인개발기능사 취득'  },
    { i1: '2025.02.12', i2: '삼육보건대학교 의료정보과 졸업'  },
    { i1: '2024.02.01', i2: '육군병장 만기전역'  },
    { i1: '2020.09.29', i2: '자동차 운전면허 1종 취득'  },
    { i1: '2020.02.06', i2: '안양 부흥고등학교 졸업'  },
  ];

  const [selected, setSelected] = useState(items[0]);

  function clickHandler(item) {
    setSelected(item);
  }

  return (
    <section className='w-full h-dvh flex flex-col pt-[100px] pl-10 pb-[75px] relative'>
      <h3 className='font-bold text-xl leading-tight mt-[10vh] mx-0 mb-[21px] text-[#111]'>tools</h3>
      <p className='m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide whitespace-pre-line'>
        {`This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.

        this is my portfolio thank you for visiting mysite thank you. This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.`}
      </p>

      <div className='max-w-[324px] absolute top-[35vh] left-[324px] flex flex-wrap pl-10'>
        {items.map((item, index) => (
          <button onClick={() => clickHandler(item)} key={index}
          className={`boxtext ${selected.i1 === item.i1 ? 'bg-black !text-white !border-none' : ''}`}
          >
            {item.i1}
          </button>
        ))}
      </div>

      {selected && (
        <div className='absolute max-w-[275px] top-[40vh] left-[648px] w-full h-[230px]'>
          <div className='absolute flex flex-col pl-[65px] gap-6 w-full'>
            <h4 className='relative font-semibold text-xl leading-tight'>{selected.i1}</h4>
            <p className='font-medium text-lg leading-tight tracking-wide text-[#111]'>{selected.i2}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section7;
