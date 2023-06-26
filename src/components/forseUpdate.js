import { useReducer } from 'react';

export default function useForceUpdate() {
  const [, forceUpdate] = useReducer(() => ({}), {});
  return forceUpdate;
}