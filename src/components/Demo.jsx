const Demo = () => {
  return (
    <div className={`flex justify-center items-center flex-col mt-8 -z-10`}>
      <h1 className={`text-white text-3xl font-semibold `}>How to ??</h1>
      <div className={`w-1/2 mt-4 border-2 border-white rounded-md`}>
        <video src="demo.mkv" autoPlay controls></video>
      </div>
    </div>
  );
};

export default Demo;
