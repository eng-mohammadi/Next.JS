import { IProductProps } from "./product";

export interface IProductListProps {
  data: IProductProps[];
  title?: string;
  limit?: number;
}
