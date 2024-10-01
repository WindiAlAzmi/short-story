export const searchData = (data) => {
    let {arr, value} = data;
     let findData = arr?.filter((item) =>
       item.title.toLowerCase().includes(value.toLowerCase())
     );
   return findData;
}