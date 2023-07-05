import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


const Wrapper = styled.main`
  width:90%;
  margin:0 auto;
  /* background-color:pink; */
  padding:30px 0;
  `


const Nav = styled.nav`
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: 70px;
  right: 0px;
  transition: all 0.3s;
  
  /* z-index:-1; */
  /* border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  /* border-radius: 10px; */
  background-color: rgba(206, 206, 254, 0.8);
  backdrop-filter: blur(10px);
  z-index: -1;
  height:fit-content;
  @media (max-width: 786px) {
    top: 0px;
    left: 0px;
  }
`;
const Profile = () => {



  const { navWidth } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  return (
     <Nav width={`${width >= 786 ? navWidth : null}`}>


    <Wrapper >
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae repellendus temporibus repudiandae eius nisi nemo, ea, nobis consequatur vitae dolorem ratione aliquid nihil aspernatur sit fugit error nesciunt? Atque, accusamus.
     Rerum repellendus nihil voluptates. Sunt rem amet dolores culpa quisquam magnam impedit sit explicabo molestiae tempore earum tempora laudantium consequuntur doloremque aliquid cupiditate odit, recusandae pariatur totam! Recusandae, molestiae consequuntur?
     Cumque, architecto. Impedit cumque laudantium distinctio, voluptas unde consequatur nesciunt numquam totam. Ullam at necessitatibus hic illum consequuntur quo tempore inventore excepturi, ut iusto incidunt odio, nostrum obcaecati! Dignissimos, culpa?
     Incidunt, fugit nihil. Atque earum, esse, doloribus ea eaque labore eius accusamus, nam ipsam similique adipisci eveniet hic numquam. Ut ullam eius itaque dicta, voluptatem similique maiores dolore sint eveniet.
     Error fugiat aspernatur ipsam est repudiandae aliquam quo aliquid? Praesentium, animi? Iste facere quam distinctio ab saepe voluptas repellat quae numquam earum vel ipsa optio necessitatibus quas, quia nihil voluptate.
     Nam aliquid consequatur fugiat quod molestiae quasi voluptate sunt dolores corrupti expedita voluptates aperiam, voluptatibus incidunt, modi repellat magni recusandae facilis porro placeat. Ipsam voluptate, nemo ab possimus nihil culpa!
     Ipsum deserunt, necessitatibus esse, eos ut expedita dolores dignissimos voluptas unde ad tempora. Voluptatibus dolores, a atque consequatur perferendis dignissimos porro provident iure voluptate modi similique perspiciatis eligendi maiores facere!
     Maiores suscipit eaque impedit, reiciendis id accusamus officia ad nemo quam soluta omnis ipsum possimus harum doloremque expedita laboriosam ut? Similique deleniti provident doloribus doloremque voluptate dolores nulla consequatur itaque!
     Doloribus, rerum accusantium amet ipsum repellendus sunt ea? Accusamus, in fugit? Tenetur reiciendis tempora ipsa explicabo debitis, reprehenderit accusantium, minima vitae ex animi velit! Eveniet sequi commodi aliquam ea quis!
     Non quibusdam ab consequatur autem cum iusto? Deleniti maiores tenetur eos odio debitis obcaecati rerum accusamus? Velit quidem, sapiente inventore odit dolorum nisi eius et iste aspernatur quaerat dolore ullam.
     Nihil quisquam, distinctio minus exercitationem vel hic illo accusantium similique accusamus, eligendi quas repellendus. Dolore amet blanditiis sint. Dolorem repellendus rem officia. Fugit dolorem id fuga reiciendis quis ea suscipit.
     Deserunt dicta mollitia molestias vel laudantium minima repellendus, sint id totam quam corrupti modi est hic distinctio nemo tempora commodi quisquam quos facilis. Possimus quia nulla, assumenda ipsa praesentium molestiae!
     Tempore vitae reprehenderit numquam excepturi dolores consequuntur nisi aperiam quos at cupiditate illum consectetur, ab blanditiis libero. Ipsa, quia officiis aliquam corporis quod inventore voluptates magnam, veniam alias dolor saepe!
     Eligendi iure ipsam placeat cum earum possimus velit! Ipsam voluptatem voluptas similique quia reiciendis tenetur recusandae omnis facere itaque vel explicabo illum doloremque eius, eligendi rem aliquid consectetur. Nesciunt, dolorum!
     Quos quisquam est obcaecati, minima voluptas earum officia doloremque, ipsa velit placeat blanditiis fugiat! Incidunt corporis alias odio quo maiores non repudiandae nobis. Officiis, expedita vel. Quia dolorem facilis tempore?
     Debitis ipsum ad impedit sint perferendis dolore porro assumenda error quibusdam, cumque quo quia corrupti placeat soluta adipisci odio nihil aliquid accusantium doloribus commodi alias totam aut. Voluptates, vitae voluptas!
     Dolor est natus ad quasi voluptate eius, illum quisquam eveniet aliquam possimus reiciendis provident neque corporis repellendus. Accusantium inventore et corrupti voluptatum, reprehenderit adipisci unde culpa, dolor eum vel aspernatur.
     Quos illo, architecto ipsa excepturi vel quas harum suscipit illum tenetur libero magni eius amet consectetur optio, numquam veritatis nisi quibusdam. Reiciendis asperiores cum dolore sed incidunt omnis ipsa exercitationem.
     Aliquid nihil deleniti obcaecati eius nam est sint dolore aperiam quo iste unde explicabo, natus aut mollitia. Est, reiciendis, corrupti unde at expedita dignissimos eligendi debitis magnam placeat illum voluptates!
     Molestiae, sed. Exercitationem eaque excepturi, ullam expedita ea, rem repellat id accusantium maxime, praesentium voluptatum veritatis atque animi distinctio ex molestiae. Rem cumque ipsa, sapiente ea minus voluptate doloremque ipsam.
     Eligendi commodi doloribus accusamus, omnis molestiae beatae repudiandae excepturi eveniet voluptates aperiam natus sit harum illo, quod provident odio et! Molestias unde alias, aliquid maxime magni tempore ea facere ipsam.
     Porro ea iure officia et ab, fugiat natus repudiandae delectus tenetur quidem laudantium quia libero dolor, pariatur obcaecati a perspiciatis asperiores eligendi nam nesciunt quam amet architecto? Omnis, voluptate totam!
     Odio nihil nemo magni ratione libero quia. Quidem id expedita nisi. Voluptate debitis possimus earum nobis quaerat nemo sint sequi ex, iure dicta, quo numquam eum unde! Tempora, expedita placeat.
     Quae illum voluptate minima autem in repudiandae corrupti magnam quod aliquid? Est reprehenderit molestiae incidunt hic perferendis officia unde consequatur impedit cumque libero, pariatur similique quasi, quo, iure aperiam aut.
     Eos ut labore maxime natus possimus unde nesciunt rerum molestiae consequuntur quos quibusdam qui, cum temporibus sequi quaerat a, in incidunt ipsa sed magni harum laudantium nostrum numquam? Reprehenderit, laborum.
     Placeat, vero beatae! Eius incidunt nesciunt aspernatur quae nam vel labore, recusandae quod, aliquid commodi eveniet illo assumenda error repellendus perspiciatis! Unde autem est eligendi voluptate, fuga facere. Rerum, blanditiis?
     Doloribus ipsum praesentium pariatur quisquam nemo, quidem molestiae enim quam impedit consectetur blanditiis reprehenderit in dignissimos doloremque eius libero necessitatibus explicabo! Itaque, consequuntur minus hic corporis ut tenetur fugit error.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore voluptatibus possimus architecto qui quae pariatur illum quia repellendus ipsam, quasi, quos, sit ex soluta! Et fuga aliquam numquam minus.
     Iste optio eveniet obcaecati ea doloribus! Inventore delectus voluptate perferendis exercitationem alias minus repellat voluptates adipisci, itaque a, nisi maxime vel odio cumque consectetur quod qui aliquid magni atque laudantium.
     Aut, possimus illum praesentium esse hic quae vero nam doloribus magnam perferendis ad perspiciatis facilis voluptatibus saepe nesciunt labore veritatis magni similique distinctio quia deleniti iure quasi totam tenetur. Eligendi.
     Consequatur officiis cum, officia mollitia eveniet soluta delectus culpa. Voluptatem, blanditiis consequuntur omnis, maxime dolorum earum vero ratione aut beatae temporibus architecto sequi quod et delectus! Minus corporis eveniet exercitationem.
     Ab maiores porro non esse! Harum, id numquam amet, debitis ea dolorum perferendis qui, molestiae aspernatur necessitatibus tenetur odit perspiciatis deleniti. Neque eligendi, ut odit repellendus ex ad assumenda distinctio?
     Tempora commodi reprehenderit perspiciatis consectetur impedit velit optio doloremque. Quam ea quo, possimus repellendus beatae cupiditate. Maxime debitis blanditiis adipisci deserunt accusantium! Dolore, voluptates. Minus totam culpa nostrum exercitationem vero!
     Deleniti laboriosam eveniet facilis quos unde vero hic nihil saepe debitis, ratione quo minus assumenda iusto aliquid voluptatum quaerat magnam. Repellat voluptatibus modi possimus vitae tempora facere quam dicta omnis.
     Esse tempore sapiente magnam magni perferendis aliquam vero. In unde quae odio officia porro vitae numquam deserunt recusandae, amet saepe nemo totam distinctio voluptates aliquam eaque quis dignissimos nesciunt dolor.
     Unde, quisquam magni! Quos, iusto voluptas beatae perferendis praesentium necessitatibus sunt cupiditate alias. Quam exercitationem ea veniam consequatur perferendis quia numquam aliquam assumenda cupiditate, error, quibusdam distinctio eaque reiciendis similique!
     Deserunt, pariatur. Maiores sunt possimus quo enim expedita. Omnis eveniet esse et praesentium, est iure incidunt animi mollitia nesciunt fugiat non minima nam exercitationem aliquam nemo temporibus rerum consequatur laboriosam.
     Dolorem excepturi possimus doloremque, temporibus aut, et asperiores reiciendis eveniet soluta perspiciatis iure atque odit fugit consequatur laboriosam enim officia velit laudantium dolor consectetur. Quae voluptatibus debitis ipsa deleniti esse.
     Accusantium suscipit sequi excepturi sunt architecto consequatur ex veritatis itaque soluta omnis aut, ullam nihil beatae totam voluptas esse similique molestias accusamus! Expedita corrupti culpa cupiditate odit, numquam nobis molestiae.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam doloribus a quibusdam et nemo optio, amet hic debitis est nisi repudiandae voluptates adipisci blanditiis facere magnam, quia deserunt obcaecati.
Voluptates id fugit iure ea? Accusantium, assumenda? Tempore dolorum sit vel, repellat optio ut aut explicabo facere porro natus? Amet illum enim facere debitis possimus, quae incidunt ex culpa dicta.
Quod quaerat quisquam est placeat expedita, cumque dolores reprehenderit quidem numquam itaque asperiores qui consequatur nisi tempora eligendi. Laboriosam maiores omnis quaerat. Veritatis, corrupti porro repellendus neque nam quisquam laudantium!
Fuga sit animi provident autem nulla nobis, quis odit architecto omnis cumque maiores alias sunt vero adipisci. Laudantium modi quam molestiae reiciendis molestias reprehenderit quas est numquam quidem. Expedita, nisi.
Voluptatum, quia explicabo quas sed laudantium alias qui deleniti magnam id totam exercitationem molestiae consectetur aspernatur dignissimos sunt ut ad rem suscipit fugiat vitae natus debitis placeat ipsum iure. Qui?
</p>
    </Wrapper>

     </Nav>
  )
}

export default Profile