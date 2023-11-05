const getListPage: any = async () => {
  try {
    const result = await fetch(process.env.REACT_APP_API as string);
    return result;
  } catch (_) {
    return {
      pages: [
        {
          id: 1,
          name: "1231",
          content: "23  __WIDGET2____WIDGET1__  adsfasdfas  __WIDGET1__",
        },
      ],
    };
  }
};

export { getListPage };
