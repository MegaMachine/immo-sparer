function n(){var t=$("header.header").outerHeight();$("section.webinar-info").css("min-height","calc(100vh - "+t+"px)")}function o(){var t,e,i=$(".webinar-info h2"),n=i.css("marginBottom");$(i[0]).outerHeight()<=$(i[1]).outerHeight()?($(i[0]).css("marginBottom",n),t=$(i[0]).outerHeight(),e=$(i[1]).outerHeight()-t,$(i[0]).css("marginBottom",parseFloat($(i[0]).css("marginBottom"))+e+"px")):($(i[1]).css("marginBottom",n),t=$(i[1]).outerHeight(),e=$(i[0]).outerHeight()-t,$(i[1]).css("marginBottom",parseFloat($(i[1]).css("marginBottom"))+e+"px"))}function s(){var t=$("body").outerWidth(),e=$(".seminare-and-map .map").offset().left,i=$(".seminare-and-map .seminare").outerWidth(),n=parseFloat($(".seminare-and-map .container").css("paddingLeft")),o=parseFloat($(".seminare-and-map .container").outerHeight());$(".seminare-and-map .map").css({width:t-e+"px",left:i+n+"px",height:o+"px"})}function r(){var t=parseFloat($(".new-properties__item__text p").css("lineHeight")),e=$(".new-properties__item__text h3"),i=$(".new-properties__item__location div"),n=0,o=0;i.map(function(){$(this).outerHeight()>=n&&(n=$(this).outerHeight())}),e.map(function(){$(this).height()>=o&&(o=$(this).height())}),i.css("height",n+"px"),e.css("height",o+"px"),$(".new-properties__item__text p").css("height",2*t+"px")}$(function(){setTimeout(function(){var t,e,i;n(),o(),s(),r(),t=$(".object-fit-simulation"),e=t.find("img"),i=e.attr("src"),e.css("display","none"),t.css({background:"url("+i+") no-repeat center / cover"})},111),$(window).scroll(function(){}),$(window).resize(function(){n(),o(),s(),r()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaGVhZGVySGVpZ2h0IiwiaGVpZ2h0IiwiJCIsIm91dGVySGVpZ2h0IiwiY3NzIiwidGl0bGVBbGlnbiIsIm1pbiIsIml0ZW1zIiwiZGVmYXVsdE1hcmdpbiIsInBhcnNlRmxvYXQiLCJtYXBXaWR0aCIsIndpbmRvd1dpZHRoIiwib3V0ZXJXaWR0aCIsIm1hcE9mZnNldCIsIm9mZnNldCIsImxlZnQiLCJzZW1pbmFyV0lkdGgiLCJjb250YWluZXJQYWRkaW5nIiwiY29udGFpbmVySGVpZ2h0Iiwid2lkdGgiLCJuZXdQcm9wZXJ0aWVzSXRlbUhlaWdodCIsIml0ZW1zTGluZUhlaWdodCIsIml0ZW1zVGV4dFRpdGxlIiwiaXRlbXNMb2NhdGlvbkhlaWdodCIsIm1heEhlaWdodDEiLCJtYXhIZWlnaHQyIiwibWFwIiwidGhpcyIsInNldFRpbWVvdXQiLCJzaW11bGF0b3IiLCJpbWciLCJpbWdTcmMiLCJmaW5kIiwiYXR0ciIsImJhY2tncm91bmQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJyZXNpemUiXSwibWFwcGluZ3MiOiJBQThCQSxTQUFBQSxJQUNBLElBQUFDLEVBQUFDLEVBQUEsaUJBQUFDLGNBQ0FELEVBQUEsd0JBQUFFLElBQUEsYUFBQSxnQkFBQUgsRUFBQSxPQUlBLFNBQUFJLElBQ0EsSUFHQUMsRUFDQUwsRUFKQU0sRUFBQUwsRUFBQSxvQkFDQU0sRUFBQUQsRUFBQUgsSUFBQSxnQkFJQUYsRUFBQUssRUFBQSxJQUFBSixlQUFBRCxFQUFBSyxFQUFBLElBQUFKLGVBQ0FELEVBQUFLLEVBQUEsSUFBQUgsSUFDQSxlQUNBSSxHQUVBRixFQUFBSixFQUFBSyxFQUFBLElBQUFKLGNBRUFGLEVBREFDLEVBQUFLLEVBQUEsSUFBQUosY0FDQUcsRUFDQUosRUFBQUssRUFBQSxJQUFBSCxJQUNBLGVBQ0FLLFdBQUFQLEVBQUFLLEVBQUEsSUFBQUgsSUFBQSxpQkFBQUgsRUFBQSxRQUdBQyxFQUFBSyxFQUFBLElBQUFILElBQ0EsZUFDQUksR0FFQUYsRUFBQUosRUFBQUssRUFBQSxJQUFBSixjQUVBRixFQURBQyxFQUFBSyxFQUFBLElBQUFKLGNBQ0FHLEVBQ0FKLEVBQUFLLEVBQUEsSUFBQUgsSUFDQSxlQUNBSyxXQUFBUCxFQUFBSyxFQUFBLElBQUFILElBQUEsaUJBQUFILEVBQUEsT0FNQSxTQUFBUyxJQUNBLElBQUFDLEVBQUFULEVBQUEsUUFBQVUsYUFDQUMsRUFBQVgsRUFBQSwwQkFBQVksU0FBQUMsS0FDQUMsRUFBQWQsRUFBQSwrQkFBQVUsYUFDQUssRUFBQVIsV0FBQVAsRUFBQSxnQ0FBQUUsSUFBQSxnQkFDQWMsRUFBQVQsV0FBQVAsRUFBQSxnQ0FBQUMsZUFDQUQsRUFBQSwwQkFBQUUsSUFBQSxDQUNBZSxNQUFBUixFQUFBRSxFQUFBLEtBQ0FFLEtBQUFDLEVBQUFDLEVBQUEsS0FDQWhCLE9BQUFpQixFQUFBLE9BS0EsU0FBQUUsSUFDQSxJQUFBQyxFQUFBWixXQUFBUCxFQUFBLGlDQUFBRSxJQUFBLGVBQ0FrQixFQUFBcEIsRUFBQSxrQ0FDQXFCLEVBQUFyQixFQUFBLHVDQUNBc0IsRUFBQSxFQUNBQyxFQUFBLEVBQ0FGLEVBQUFHLElBQUEsV0FDQXhCLEVBQUF5QixNQUFBeEIsZUFBQXFCLElBQ0FBLEVBQUF0QixFQUFBeUIsTUFBQXhCLGlCQUdBbUIsRUFBQUksSUFBQSxXQUNBeEIsRUFBQXlCLE1BQUExQixVQUFBd0IsSUFDQUEsRUFBQXZCLEVBQUF5QixNQUFBMUIsWUFHQXNCLEVBQUFuQixJQUFBLFNBQUFvQixFQUFBLE1BQ0FGLEVBQUFsQixJQUFBLFNBQUFxQixFQUFBLE1BQ0F2QixFQUFBLGlDQUFBRSxJQUFBLFNBQUEsRUFBQWlCLEVBQUEsTUF0R0FuQixFQUFBLFdBRUEwQixXQUFBLFdBa0JBLElBQ0FDLEVBQ0FDLEVBQ0FDLEVBcEJBL0IsSUFDQUssSUFDQUssSUFDQVUsSUFlQVMsRUFBQTNCLEVBQUEsMEJBQ0E0QixFQUFBRCxFQUFBRyxLQUFBLE9BQ0FELEVBQUFELEVBQUFHLEtBQUEsT0FDQUgsRUFBQTFCLElBQUEsVUFBQSxRQUNBeUIsRUFBQXpCLElBQUEsQ0FDQThCLFdBQUEsT0FBQUgsRUFBQSxnQ0FsQkEsS0FFQTdCLEVBQUFpQyxRQUFBQyxPQUFBLGNBRUFsQyxFQUFBaUMsUUFBQUUsT0FBQSxXQUNBckMsSUFDQUssSUFDQUssSUFDQVUiLCJmaWxlIjoiY3VzdG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGhlYWRlckhlaWdodCgpO1xuICAgIHRpdGxlQWxpZ24oKTtcbiAgICBtYXBXaWR0aCgpO1xuICAgIG5ld1Byb3BlcnRpZXNJdGVtSGVpZ2h0KCk7XG4gICAgb2JqZWN0Rml0U2ltdWxhdGlvbigpO1xuICB9LCAxMTEpO1xuXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7fSk7XG5cbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICBoZWFkZXJIZWlnaHQoKTtcbiAgICB0aXRsZUFsaWduKCk7XG4gICAgbWFwV2lkdGgoKTtcbiAgICBuZXdQcm9wZXJ0aWVzSXRlbUhlaWdodCgpO1xuICB9KTtcbn0pO1xuLy9vYmplY3QtZml0LXNpbXVsYXRpb25cbmZ1bmN0aW9uIG9iamVjdEZpdFNpbXVsYXRpb24oKXtcbiAgdmFyIHNpbXVsYXRvciA9ICQoJy5vYmplY3QtZml0LXNpbXVsYXRpb24nKTtcbiAgdmFyIGltZyA9IHNpbXVsYXRvci5maW5kKCdpbWcnKTtcbiAgdmFyIGltZ1NyYyA9IGltZy5hdHRyKCdzcmMnKTtcbiAgaW1nLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgc2ltdWxhdG9yLmNzcyh7XG4gICAgJ2JhY2tncm91bmQnOid1cmwoJytpbWdTcmMrJykgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyJyxcbiAgfSk7XG59XG4vL3dlYmluYXIgaGVpZ2h0XG5mdW5jdGlvbiBoZWFkZXJIZWlnaHQoKSB7XG4gIHZhciBoZWlnaHQgPSAkKFwiaGVhZGVyLmhlYWRlclwiKS5vdXRlckhlaWdodCgpO1xuICAkKFwic2VjdGlvbi53ZWJpbmFyLWluZm9cIikuY3NzKFwibWluLWhlaWdodFwiLCBcImNhbGMoMTAwdmggLSBcIiArIGhlaWdodCArIFwicHgpXCIpO1xufVxuXG4vL3dlYmluYXIgdGl0bGUgYWxpZ25cbmZ1bmN0aW9uIHRpdGxlQWxpZ24oKSB7XG4gIHZhciBpdGVtcyA9ICQoXCIud2ViaW5hci1pbmZvIGgyXCIpO1xuICB2YXIgZGVmYXVsdE1hcmdpbiA9IGl0ZW1zLmNzcygnbWFyZ2luQm90dG9tJyk7XG4gIHZhciBtYXg7XG4gIHZhciBtaW47XG4gIHZhciBoZWlnaHQ7XG4gIGlmICgkKGl0ZW1zWzBdKS5vdXRlckhlaWdodCgpIDw9ICQoaXRlbXNbMV0pLm91dGVySGVpZ2h0KCkpIHtcbiAgICAkKGl0ZW1zWzBdKS5jc3MoXG4gICAgICBcIm1hcmdpbkJvdHRvbVwiLFxuICAgICAgZGVmYXVsdE1hcmdpblxuICAgICk7XG4gICAgbWluID0gJChpdGVtc1swXSkub3V0ZXJIZWlnaHQoKTtcbiAgICBtYXggPSAkKGl0ZW1zWzFdKS5vdXRlckhlaWdodCgpO1xuICAgIGhlaWdodCA9IG1heCAtIG1pbjtcbiAgICAkKGl0ZW1zWzBdKS5jc3MoXG4gICAgICBcIm1hcmdpbkJvdHRvbVwiLFxuICAgICAgcGFyc2VGbG9hdCgkKGl0ZW1zWzBdKS5jc3MoXCJtYXJnaW5Cb3R0b21cIikpICsgaGVpZ2h0ICsgXCJweFwiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAkKGl0ZW1zWzFdKS5jc3MoXG4gICAgICBcIm1hcmdpbkJvdHRvbVwiLFxuICAgICAgZGVmYXVsdE1hcmdpblxuICAgICk7XG4gICAgbWluID0gJChpdGVtc1sxXSkub3V0ZXJIZWlnaHQoKTtcbiAgICBtYXggPSAkKGl0ZW1zWzBdKS5vdXRlckhlaWdodCgpO1xuICAgIGhlaWdodCA9IG1heCAtIG1pbjtcbiAgICAkKGl0ZW1zWzFdKS5jc3MoXG4gICAgICBcIm1hcmdpbkJvdHRvbVwiLFxuICAgICAgcGFyc2VGbG9hdCgkKGl0ZW1zWzFdKS5jc3MoXCJtYXJnaW5Cb3R0b21cIikpICsgaGVpZ2h0ICsgXCJweFwiXG4gICAgKTtcbiAgfVxufVxuXG4vL21hcCBzaXplXG5mdW5jdGlvbiBtYXBXaWR0aCgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gJChcImJvZHlcIikub3V0ZXJXaWR0aCgpO1xuICB2YXIgbWFwT2Zmc2V0ID0gJChcIi5zZW1pbmFyZS1hbmQtbWFwIC5tYXBcIikub2Zmc2V0KCkubGVmdDtcbiAgdmFyIHNlbWluYXJXSWR0aCA9ICQoJy5zZW1pbmFyZS1hbmQtbWFwIC5zZW1pbmFyZScpLm91dGVyV2lkdGgoKTtcbiAgdmFyIGNvbnRhaW5lclBhZGRpbmcgPSBwYXJzZUZsb2F0KCQoJy5zZW1pbmFyZS1hbmQtbWFwIC5jb250YWluZXInKS5jc3MoJ3BhZGRpbmdMZWZ0JykpO1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcGFyc2VGbG9hdCgkKCcuc2VtaW5hcmUtYW5kLW1hcCAuY29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSk7XG4gICQoXCIuc2VtaW5hcmUtYW5kLW1hcCAubWFwXCIpLmNzcyh7XG4gICAgXCJ3aWR0aFwiOiB3aW5kb3dXaWR0aCAtIG1hcE9mZnNldCArIFwicHhcIixcbiAgICAnbGVmdCc6IHNlbWluYXJXSWR0aCArIGNvbnRhaW5lclBhZGRpbmcgKyAncHgnLFxuICAgICdoZWlnaHQnOiBjb250YWluZXJIZWlnaHQgKyAncHgnXG4gIH0pO1xufVxuXG4vLyBuZXctcHJvcGVyaXRpZXMgbmV3LXByb3BlcnRpZXNfX2l0ZW1fX3RleHQgaGVpZ2h0XG5mdW5jdGlvbiBuZXdQcm9wZXJ0aWVzSXRlbUhlaWdodCgpe1xuICB2YXIgaXRlbXNMaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdCgkKCcubmV3LXByb3BlcnRpZXNfX2l0ZW1fX3RleHQgcCcpLmNzcygnbGluZUhlaWdodCcpKTtcbiAgdmFyIGl0ZW1zVGV4dFRpdGxlID0gJCgnLm5ldy1wcm9wZXJ0aWVzX19pdGVtX190ZXh0IGgzJyk7XG4gIHZhciBpdGVtc0xvY2F0aW9uSGVpZ2h0ID0gICQoJy5uZXctcHJvcGVydGllc19faXRlbV9fbG9jYXRpb24gZGl2Jyk7XG4gIHZhciBtYXhIZWlnaHQxID0gMDtcbiAgdmFyIG1heEhlaWdodDIgPSAwO1xuICBpdGVtc0xvY2F0aW9uSGVpZ2h0Lm1hcChmdW5jdGlvbigpe1xuICAgIGlmKCQodGhpcykub3V0ZXJIZWlnaHQoKSA+PSBtYXhIZWlnaHQxKXtcbiAgICAgIG1heEhlaWdodDEgPSAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XG4gICAgfVxuICB9KTtcbiAgaXRlbXNUZXh0VGl0bGUubWFwKGZ1bmN0aW9uKCl7XG4gICAgaWYoJCh0aGlzKS5oZWlnaHQoKSA+PSBtYXhIZWlnaHQyKXtcbiAgICAgIG1heEhlaWdodDIgPSAkKHRoaXMpLmhlaWdodCgpO1xuICAgIH1cbiAgfSk7XG4gIGl0ZW1zTG9jYXRpb25IZWlnaHQuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQxICsgJ3B4Jyk7XG4gIGl0ZW1zVGV4dFRpdGxlLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0MiArICdweCcpO1xuICAkKCcubmV3LXByb3BlcnRpZXNfX2l0ZW1fX3RleHQgcCcpLmNzcygnaGVpZ2h0JywgaXRlbXNMaW5lSGVpZ2h0ICogMiArICdweCcpO1xuIFxufSJdfQ==
