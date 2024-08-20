/* 热门游戏 */
export const handlePopularGame = async (url: string) => {
  try {
    const res = (await getFetchData({ url })) as ResponseData<GamePopular>;
    if (res.code === 0) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
export const handleGameList = async (url: string, params: GameParams) => {
  try {
    const res = (await getFetchData({ url, opts: params })) as ResponseData<GameList>;
    if (res.code === 0) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
export const handleGameDetails = async (url: string, gameId: string) => {
  try {
    const res = (await getFetchData({ url, opts: { gameId } })) as ResponseData<GameDateils>;
    if (res.code === 0) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
export const handleGameCategory = async (url: string) => {
  try {
    const res = (await getFetchData({ url })) as ResponseData<GameCategoryList>;
    if (res.code === 0) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
