let hasClass = (ele, cls) => {
  return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

let addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) {
    return ele.className += ' ' + cls
  }
}

let removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, '')
  }
}

window.onload = () => {
  let searchForm = document.querySelector('.search-form')
  let typeSelect = document.querySelector('.search-form-select')
  let keywordsInput = document.querySelector('.search-form-input')
  let submitBtn = document.querySelector('.search-form-button')

  document.onkeydown = (e) => {
    if(e && e.keyCode === 13 && submitBtn) {
      submitBtn.click()
    }
  }

  if (submitBtn && searchForm && keywordsInput) {
    submitBtn.onclick = (e) => {
      if (keywordsInput.value.replace(/(^\s*)|(\s*$)/g, '')) {
        searchForm.submit()
      }
    }
  }

  if (typeSelect && searchForm && keywordsInput) {
    let Config = {
      'one': {
        action: '/result/one',
        placeholder: '80s电影天堂搜索'
      },
      'two': {
        action: '/result/two',
        placeholder: 'DiggBT搜索，功能强大'
      },
      'three': {
        action: '/result/three',
        placeholder: 'BT蚂蚁搜索，DiggBT的备用搜索，功能同样强大'
      },
      'four': {
        action: '/result/four',
        placeholder: '韩饭网搜索，韩剧/韩综/韩国电影等'
      },
      'five': {
        action: '/result/five',
        placeholder: 'BT之家搜索'
      }
    }
    typeSelect.onchange = (e) => {
      keywordsInput.setAttribute('placeholder', Config[e.target.value].placeholder)
      searchForm.setAttribute('action', Config[e.target.value].action)
    }
  }

  let showBtn = document.querySelectorAll('.content-title-arrow')
  if (showBtn) {
    for (let i = 0, len = showBtn.length; i < len; i ++) {
      showBtn[i].onclick = (e) => {
        if (hasClass(e.target, 'active')) {
          e.target.setAttribute('title', '展开')
          removeClass(e.target, 'active')
          removeClass(e.target.parentNode.nextSibling, 'active')
        } else {
          e.target.setAttribute('title', '收起')
          addClass(e.target, 'active')
          addClass(e.target.parentNode.nextSibling, 'active')
        }
        e.stopPropagation()
      }
    }
  }
}