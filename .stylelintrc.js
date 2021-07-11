module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-prettier/recommended"
    ],
    rules: {
      'at-rule-no-unknown': [true, {  // --------------------------------------------------- 禁止使用未知的 @未知名称 规则
        ignoreAtRules: [
          'mixin', 'extend', 'content'
        ]
      }],
      'comment-empty-line-before': [  // --------------------------------------------------- 强制要求在注释之前有空行，例外：嵌套规则首行不需要空行，stylelint-commend不需要空行；
        'always',
        {
          except: ['first-nested'],
          ignore: ['stylelint-commands'],
        },
      ],
      'block-no-empty': true, // ----------------------------------------------------------- 禁止出现空白样式规则块
      'declaration-empty-line-before': 'never', // ----------------------------------------- 禁止在声明语句之前有空行。
      'declaration-block-no-duplicate-properties': true, // -------------------------------- 禁止在声明的块中出现重复的属性
      'declaration-block-no-redundant-longhand-properties': true, // ----------------------- 禁止使用可以缩写却不缩写的属性。
      'shorthand-property-no-redundant-values': true, // ----------------------------------- 禁止在简写属性中使用冗余值，例：margin: 1px 1px 1px 1px --> margin: 1px
      'function-url-quotes': 'always', // -------------------------------------------------- 强制要求 url 使用引号。
      'color-hex-length': 'short', // ------------------------------------------------------ 强制要求十六进制颜色不能使用缩写
      'color-named': 'never', // ----------------------------------------------------------- 禁止使用命名的颜色，例：color: red
      'comment-no-empty': true, // --------------------------------------------------------- 禁止空注释
      'font-family-name-quotes': 'always-unless-keyword', // ------------------------------- 强制要求非关键字的字体名称使用引号引起来
      'font-weight-notation': 'numeric', // ------------------------------------------------ 强制要求使用数字的 font-weight 值
      'property-no-vendor-prefix': true, // ------------------------------------------------ 禁止属性使用浏览器引擎前缀
      'value-no-vendor-prefix': true, // --------------------------------------------------- 禁止给值添加浏览器引擎前缀
      'selector-no-vendor-prefix': true, // ------------------------------------------------ 禁止使用浏览器引擎前缀
      'no-descending-specificity': null, // ------------------------------------------------ 禁止低优先级的选择器出现在高优先级的选择器之后
      
      /******************************************************************/
      /********* disabled rules from stylelint-config-prettier **********/
      /******************************************************************/
      // 'rule-empty-line-before': [ // ------------------------------------------------------- 禁止在规则声明之前有空行
      //   'always-multi-line',
      //   {
      //     except: ['first-nested'],
      //     ignore: ['after-comment'],
      //   },
      // ]
    }
  }