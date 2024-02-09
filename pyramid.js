function pyramid(n) {
    const width = 2 * n - 1;
  
    for (let i = 0; i < n; i++) {
      let level = '';
  
      for (let j = 0; j < width; j++) {
        if (j >= n - i - 1 && j <= n + i - 1) {
          level += '#';
        } else {
          level += ' ';
        }
      }
  
      console.log(level);
    }
  }

  pyramid(30)