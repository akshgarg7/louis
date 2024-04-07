/* global Word console */

const insertText = async (text) => {
  // Write text to the document.
  try {
    await Word.run(async (context) => {
      let body = context.document.body;
      body.insertParagraph(text, Word.InsertLocation.end);
      await context.sync();
    });
  } catch (error) {
    console.log("Error: " + error);
  }
};

Word.run(function (context) {
  // Get the collection of comments in the document
  var comments = context.document.comments;
  context.load(comments); // Load the comments collection

  return context.sync().then(function () {
      // Iterate through the comments after the context is synced
      comments.items.forEach(function (comment) {
          console.log('Comment Author: ' + comment.author.displayName);
          console.log('Comment Text: ' + comment.text);
      });
  });
}).catch(function (error) {
  console.error('Error: ' + JSON.stringify(error));
});

Word.run(function (context) {
  // Reference the body to use as the anchor for the new comment.
  var body = context.document.body;
  
  // Add a comment to the end of the document body.
  var comment = body.insertComment("This is a new comment", "Author Name");

  return context.sync().then(function () {
      console.log('Comment added successfully.');
  });
}).catch(function (error) {
  console.error('Error: ' + JSON.stringify(error));
});


export default insertText;
