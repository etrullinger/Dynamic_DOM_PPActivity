/** Array of objects representing all of user's added bookmarks */
const bookmarkData = [];

/** bookmark class to model each bookmark in bookmarkData variable */
class Bookmark {
    constructor(url, bookmarkName) {
        this.url = url;
        this.bookmarkName = bookmarkName;
        // need to add remove button
    }

    /** render method to render each individual bookmark object */
    render() {
        var bookmarkWrapper = document.createElement('li');
        bookmarkWrapper.id = `${this.bookmarkName}`;

        var a = document.createElement('a');
        var bookmarkTitle = document.createElement('h2');
        bookmarkTitle.textContent = `${this.bookmarkName}`;
        a.addEventListener('click', (event) => {
            window.open(`${this.url}`, '_blank');
        });
        a.append(bookmarkTitle);

        var removeButton = document.createElement('button');
        removeButton.id = `remove${this.bookmarkName}`
        var removeButtonTitle = document.createElement('h3');
        removeButtonTitle.textContent = 'Remove';
        removeButton.append(removeButtonTitle);

        bookmarkWrapper.append(a, removeButton);

        return bookmarkWrapper;
    }
}

/** bookmarkList class to manage array of bookmarks */
class BookmarkList {
    constructor() {
        this.arrayOfBookmarks = [];
        this.filteredArrayOfBookmarks = [];
    }

    /** method to add bookmark to arrayOfBookmarks */
    addBookmark(bookmark) {
        this.arrayOfBookmarks.push(bookmark);
    }

    removeBookmark(bookmark) {
        const bookmarkWrapper = document.querySelector(`#${bookmarkName}`);
        bookmarkWrapper.remove();
        this.arrayOfBookmarks.filter(bookmark);
    }

    /** to render all bookmark objects to the DOM */
    render() {
        /** render either arrayOfBookmarks or filteredArrayOfBookmarks to the DOM
         * depending on whether filteredArrayOfBookmarks has a value */
        let arrayToBeRendered;
        this.filteredArrayOfBookmarks.length ? arrayToBeRendered = this.filteredArrayOfBookmarks : arrayToBeRendered = this.arrayOfBookmarks;
        const bookmarkList = document.querySelector('#bookmarkList');
        const listOfBookmarkWrapper = document.createElement('ul');
        arrayToBeRendered.map(bookmark => {
            listOfBookmarkWrapper.append(bookmark.render());
        });
    
        bookmarkList.append(listOfBookmarkWrapper);
    }

    /** method to clear up the DOM of the current bookmark list being displayed */
    clearList() {
        const list = document.querySelector('ul');
        list.remove();
    }

    // /** method to seed arrayOfBookmarks to BookmarkList class */
    // seed(arrayOfBookmarkData) {
    //     for (const bookmark of arrayOfBookmarkData) {
    //         const bookmarkInstance = new Bookmark(bookmark.url, bookmark.bookmarkName);
    //         bookmarkList.addBookmark(bookmarkInstance);
    //     }
    // }
}

/** instance of Bookmark class */
const bookmark1 = new Bookmark('url', 'bookmarkName');

/** instance of BookmarkList class */
const bookmarkList = new BookmarkList();

// /** called to seed instance method of bookmarkList */
// bookmarkList.seed(bookmarkData);

/** called to render instance method of bookmarkList */
bookmarkList.render();

/** to grab input element from html where user inputs url */
const urlText = document.querySelector('#websiteSearch');

/** to grab input element from html where user inputs bookmark name */
const bookmarkName = document.querySelector('#bookmarkTitle');

const bookmarkButton = document.querySelector('#bookmarkButton');
bookmarkButton.addEventListener('click', (event) => {
    
    let urlTextInput = urlText.value.toLowerCase();
    let bookmarkNameInput = bookmarkName.value;
    let bookmarkInstance = new Bookmark(urlTextInput, bookmarkNameInput);
    bookmarkList.addBookmark(bookmarkInstance);

    bookmarkList.clearList();
    bookmarkList.render();
})
