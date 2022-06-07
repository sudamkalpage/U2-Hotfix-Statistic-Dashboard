import create from "zustand";
import { IGraphData } from "../Types/IGraphData";

type State = {
  graphData: IGraphData[][][];
  setGraphData: (graphData: IGraphData[][][]) => void;
  filteredGraphData: IGraphData[][][];
  setFilteredGraphData: (graphData: IGraphData[][][]) => void;
};

export const useGraphDataStore = create<State>((set) => ({
  graphData: [],
  setGraphData: (graphData) => set({ graphData }),
  filteredGraphData: [],
  setFilteredGraphData: (graphData) => set({ graphData }),
}));
