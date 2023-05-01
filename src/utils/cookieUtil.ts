import Cookies from 'js-cookie';

export function get(key: string) {
  return Cookies.get(key);
}

export function set(key: string, value: string | object, options?: object) {
  if (typeof value == 'string') {
    Cookies.set(key, value, options);
  } else {
    Cookies.set(key, JSON.stringify(value), options);
  }
}

export function remove(key: string) {
  return Cookies.remove(key);
}
