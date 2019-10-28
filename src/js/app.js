

function init(){
  console.log('Init');
  document.body.classList.remove('loaded');
  TweenMax.to('.loader', 1, {autoAlpha: 0, onComplete: function(){    
    TweenMax.set('.loader', {display: 'none'});
  }})

  new TimelineMax({repeat: -1}).set('.list__tabs_loader .point-2', {x: -24})
    .set('.list__tabs_loader .point-3', {x: -48})
    .to('.list__tabs_loader .point-2', 0.4, {x: 0, ease: Power3.easeIn}, 'step1')
    .to('.list__tabs_loader .point-3', 0.4, {x: -24, ease: Power3.easeIn},'step1')
    .to('.list__tabs_loader .point-3', 0.4, {x: 0, ease: Power3.easeOut})
    .to('.list__tabs_loader .point-1', 0.4, {x: 24, ease: Power3.easeIn})
    .to('.list__tabs_loader .point-1', 0.4, {x: 48, ease: Power3.easeOut},'step2')
    .to('.list__tabs_loader .point-2', 0.4, {x: 24, ease: Power3.easeOut},'step2')
    .to('.list__tabs_loader .point-1', 0.4, {x: 0, ease: Power3.easeInOut},'step3')
    .to('.list__tabs_loader .point-2', 0.4, {x: -24, ease: Power3.easeInOut},'step3')
    .to('.list__tabs_loader .point-3', 0.4, {x: -48, ease: Power3.easeInOut},'step3')

    $('.list__tabs-head li').click(function(e){
      let t = $(this).attr('data-href');
      $('.list__tabs-head li').removeClass('current');
      $(this).addClass('current');
      $('.list__tabs-body.current').removeClass('current');
      $('.list__tabs-body[data-target="'+t+'"]').addClass('current');
    });

    $('.article__subscribe_input input').focus(function(e){
      $(this).closest('.article__subscribe_input').addClass('focus');
    });
    $('.article__subscribe_input input').blur(function(e){
      let val = $.trim($(this).val()).length;
      console.log(val);
      if(val == 0)$(this).closest('.article__subscribe_input').removeClass('focus');
    });
}


window.onload = init();

