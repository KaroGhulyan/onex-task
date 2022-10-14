import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { generateItems } from "../services/services";

const useGetDataByInfiniteScroll = () => {
  const tableEl = useRef();
  const [rows, setRows] = useState(generateItems(50));
  const [loading, setLoading] = useState(false);
  const [distanceBottom, setDistanceBottom] = useState(0);
  const [hasMore] = useState(true);

  const loadMore = useCallback(() => {
    const loadItems = async () => {
      await new Promise((resolve) =>
        setTimeout(() => {
          const amount = rows.length + 50;
          setRows(generateItems(amount));
          setLoading(false);
          resolve();
        }, 2000)
      );
    };

    setLoading(true);
    loadItems();
  }, [rows]);

  const scrollListener = useCallback(() => {
    let bottom = tableEl.current.scrollHeight - tableEl.current.clientHeight;
    if (!distanceBottom) {
      setDistanceBottom(Math.round((bottom / 100) * 20));
    }

    if (
      tableEl.current.scrollTop > bottom - distanceBottom &&
      hasMore &&
      !loading
    ) {
      loadMore();
    }
  }, [hasMore, loadMore, loading, distanceBottom]);

  useLayoutEffect(() => {
    const tableRef = tableEl.current;
    tableRef.addEventListener("scroll", scrollListener);
    return () => {
      tableRef.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);

  return {
    tableEl,
    rows,
    loading,
  };
};

export default useGetDataByInfiniteScroll;
