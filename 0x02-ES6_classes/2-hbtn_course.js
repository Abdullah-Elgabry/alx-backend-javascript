/**
 * Implement a class named HolbertonCourse
 * Constructor attributes:
 * name (String)
 * length (Number)
 * students (array of Strings)
 */
export default class HolbertonCourse {

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * course Name
   */
  get name() {
    return this._name;
  }

  /**
   * set course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * COURSE getter
   */
  get length() {
    return this._length;
  }

  /**
   * COURSE setter
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * students getter
   */
  get students() {
    return this._students;
  }

  /**
   * students setter
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
