import { useEffect, useState } from "react";
const useCurrencyInfo = (currency) => {
  //Custom hook banaya / kai hooks optional argument lete hai but mera hook optional argument nahi leta hai use currency/variable information dena hi parata hai
  const [data, setData] = useState({}); //{} dene ka matalb hai ki fatch se call nahi aa raha hai to empty object hai to usape loop laga oge to crash to nahi hoga

  useEffect(() => {
    //koi bhi component mount hota hai usaka life-cycle-event-trigger hota hai to hamare pass one hook hai useEffect
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        //console.log(response);//jo bhi response aaya hai oh json formate me aaya hai / agar data ko regular variable me hold karunga to UI me kabhi bhi update nahi hoga / to isi liye useState used liya
        const jsonData = await response.json(); //
        setData(jsonData[currency]); //API me jobhi value pass karoge to key value ohi aayega / object ko access karane ke liye . or [] bhi used kar sakate hai
        //console.log(jsonData);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [currency]); //useCurrencyInfo me currency me jab jab change go to mai / yaha se call karana chahata hu isi liye ise dependency Array bolate hai
  //console.log(data)
  return data;
};

export default useCurrencyInfo; // pura method hi return kiya hai
