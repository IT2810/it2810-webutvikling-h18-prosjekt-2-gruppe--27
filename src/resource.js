export default class Resource {
  constructor(id, fileType, category, filename){
    this.id = id;
    this.fileType = fileType;
    this.category = category;
    this.filename = filename;
    this.state = "initialized";
    this.data = null;
  }

  get url() {
    return `${this.fileType}/${this.category}/${this.filename}`;
  }

  /**
   * Creates a copy of this object with the same properties as assigned in the constructor
   * @returns {Resource}
   */
  clone() {
    const clone = new Resource(this.id, this.fileType, this.category, this.filename);
    clone.state = this.state;
    clone.data = this.data;
    return clone;
  }

  /**
   * Begins fetching the resource at this.url. Returns a promise that
   * resolves to a clone of this object with state equals "loaded" or "error",
   * and data equals the returned data if the resource loaded successfully.
   * @returns {Promise<Resource>}
   */
  fetch() {
    const original = this;
    return new Promise(function(resolve, reject) {
      fetch(original.url)
        .then(response => {
          switch (original.fileType) {
            case "images":
              return response.text();
            case "sounds":
              return response.blob();
            case "texts":
              return response.json();
            default:
              console.warn(original, "resource has unknown type", original.fileType);
              break;
          }
        })
        .then(data => {
          const clone = original.clone();
          clone.state = "loaded";
          clone.data = data;
          resolve(clone);
        })
        .catch(reason => {
          console.error(`Error loading resource ${original.url}:\n`, reason);
          const clone = original.clone();
          clone.state = "error";
          resolve(clone);
        });
    });
  }
}
