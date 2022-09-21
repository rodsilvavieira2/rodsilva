import { nanoid } from "nanoid";

export function whitId<T>(data: T[]): Array<T & { id: string }> {
  return data.map((props) => ({ ...props, id: nanoid() }));
}
