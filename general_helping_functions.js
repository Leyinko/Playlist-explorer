// > Lyrics text

var originalText = `We are forever
We are forever
That's when you don't
That's when you know
This is when you know, who your real friends are
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
This is when you know, this is when you know
Who your real friends are
Who your real friends are, who your real friends are, huh
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
This is when you know who your real friends are
That's when you know
That's when you don't
Who your real friends are
This is when you know
This is when you know who your real friends are
Hey, hey, hey, who your real friends are
Who your real friends are, uh
That's when you know (Who your real friends are)
That's when you know
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
Who your real friends are
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
That's when you don't
This is when you know, this is when you know
Who your real friends are`;

var toSlash = originalText.replace(/^$/gm, 'empty').replace(/[\r\n]+/g, 'break');
console.log(toSlash);
