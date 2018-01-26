const maxArea = (height) => {
  if (!height) {
    return 0;
  };
  let start = 0;
  let end = height.length-1;
  let maxW = 0;

  while (start < end) {
    maxW = Math.max(maxW, Math.min(height[start], height[end]) * (end-start));
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxW;
};

module.exports = maxArea;